"use client";

import type { FormEvent } from "react";
import { useState } from "react";

import {
  PUBLIC_CONTACT_EMAIL,
  PUBLIC_CONTACT_EMAIL_HREF,
  replaceLegacyContactEmail
} from "@/lib/contact-details";
import type { Locale } from "@/lib/i18n";

type FieldName = "name" | "company" | "email" | "projectType" | "message";
type FieldErrors = Partial<Record<FieldName, string>>;

type FormStatus =
  | { state: "idle" }
  | { state: "loading" }
  | { state: "notice"; message: string; reference?: string }
  | { state: "success"; message: string; reference?: string }
  | { state: "error"; message: string; reference?: string };

type ContactFormProps = {
  locale: Locale;
  copy: {
    kicker: string;
    title: string;
    description: string;
    statuses: {
      clientValidationError: string;
      submitting: string;
      fallbackError: string;
      reference: string;
      successFollowUpPrefix: string;
      successFollowUpLink: string;
    };
    labels: {
      name: string;
      company: string;
      email: string;
      projectType: string;
      message: string;
    };
    placeholders: {
      name: string;
      company: string;
      email: string;
      projectType: string;
      message: string;
    };
    hints: {
      message: string;
      range: string;
      preferredInput: string;
    };
    buttons: {
      idle: string;
      loading: string;
    };
    options: Array<{ value: string; label: string }>;
    validation: {
      name: string;
      email: string;
      projectType: string;
      company: string;
      messageMin: string;
      messageMax: string;
    };
  };
};

const initialStatus: FormStatus = { state: "idle" };
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function readField(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function normalizeStatusMessage(value: string) {
  return replaceLegacyContactEmail(value);
}

export function ContactForm({ locale, copy }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function clearFieldError(field: FieldName) {
    setFieldErrors((current) => {
      if (!current[field]) {
        return current;
      }

      const next = { ...current };
      delete next[field];
      return next;
    });
  }

  function validatePayload(payload: {
    name: string;
    company: string;
    email: string;
    projectType: string;
    message: string;
  }) {
    const errors: FieldErrors = {};

    if (payload.name.length < 2) {
      errors.name = copy.validation.name;
    }

    if (!emailPattern.test(payload.email)) {
      errors.email = copy.validation.email;
    }

    if (!payload.projectType) {
      errors.projectType = copy.validation.projectType;
    }

    if (payload.company.length > 120) {
      errors.company = copy.validation.company;
    }

    if (payload.message.length < 24) {
      errors.message = copy.validation.messageMin;
    }

    if (payload.message.length > 2400) {
      errors.message = copy.validation.messageMax;
    }

    return errors;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: readField(formData, "name"),
      company: readField(formData, "company"),
      email: readField(formData, "email"),
      projectType: readField(formData, "projectType"),
      message: readField(formData, "message"),
      website: readField(formData, "website"),
      locale
    };

    const nextFieldErrors = validatePayload(payload);

    if (Object.keys(nextFieldErrors).length > 0) {
      setFieldErrors(nextFieldErrors);
      setStatus({
        state: "error",
        message: copy.statuses.clientValidationError
      });
      return;
    }

    setFieldErrors({});
    setStatus({ state: "loading" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const result = (await response.json()) as {
        ok: boolean;
        message?: string;
        error?: string;
        reference?: string;
        deliveryMode?: "forwarded" | "logged-only";
        fieldErrors?: FieldErrors;
      };

      if (!response.ok || !result.ok) {
        setFieldErrors(result.fieldErrors ?? {});
        setStatus({
          state: "error",
          message: normalizeStatusMessage(result.error ?? copy.statuses.fallbackError),
          reference: result.reference
        });
        return;
      }

      form.reset();
      setFieldErrors({});
      setStatus(
        result.deliveryMode === "logged-only"
          ? {
              state: "notice",
              message: normalizeStatusMessage(result.message ?? copy.statuses.fallbackError),
              reference: result.reference
            }
          : {
              state: "success",
              message: normalizeStatusMessage(result.message ?? copy.statuses.submitting),
              reference: result.reference
            }
      );
    } catch {
      setStatus({
        state: "error",
        message: normalizeStatusMessage(copy.statuses.fallbackError)
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="surface p-6 md:p-8">
      <div className="mb-8 space-y-4">
        <span className="section-kicker sticker-rotate-1">{copy.kicker}</span>
        <h2 className="text-4xl font-black leading-[0.96] tracking-[-0.05em] text-[rgb(var(--ink))]">
          {copy.title}
        </h2>
        <p className="text-sm leading-7 text-[rgb(var(--ink-soft))]">{copy.description}</p>
      </div>

      {status.state !== "idle" ? (
        <div
          aria-live="polite"
          className={`mb-6 break-words rounded-[1.4rem] border-[3px] px-4 py-3 text-sm shadow-[4px_4px_0_0_rgb(var(--shadow))] ${
            status.state === "success"
              ? "border-[rgb(var(--ink))] bg-[rgb(196,243,212)] text-[rgb(var(--ink))]"
              : status.state === "notice"
                ? "border-[rgb(var(--ink))] bg-[rgb(var(--tertiary-container))] text-[rgb(var(--ink))]"
              : status.state === "error"
                ? "border-[rgb(var(--ink))] bg-[rgb(var(--primary-container))] text-[rgb(var(--ink))]"
                : "border-[rgb(var(--ink))] bg-[rgb(var(--secondary-container))] text-[rgb(var(--ink))]"
          }`}
        >
          <p>{status.state === "loading" ? copy.statuses.submitting : status.message}</p>
          {"reference" in status && status.reference ? (
            <p className="mt-2 font-[var(--font-label)] text-[0.7rem] font-extrabold uppercase tracking-[0.16em]">
              {copy.statuses.reference}: {status.reference}
            </p>
          ) : null}
          {status.state === "success" || status.state === "notice" ? (
            <p className="mt-2 text-xs leading-6 text-[rgb(var(--ink-soft))]">
              {copy.statuses.successFollowUpPrefix}{" "}
              <a
                href={PUBLIC_CONTACT_EMAIL_HREF}
                className="break-all underline underline-offset-4"
              >
                {PUBLIC_CONTACT_EMAIL}
              </a>
              .
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="grid gap-5 md:grid-cols-2">
        <label className="space-y-2 text-sm text-[rgb(var(--ink))]">
          <span className="label-caps">{copy.labels.name}</span>
          <input
            className="form-input"
            type="text"
            name="name"
            placeholder={copy.placeholders.name}
            minLength={2}
            maxLength={80}
            aria-invalid={Boolean(fieldErrors.name)}
            onChange={() => clearFieldError("name")}
            required
          />
          {fieldErrors.name ? <p className="field-error">{fieldErrors.name}</p> : null}
        </label>

        <label className="space-y-2 text-sm text-[rgb(var(--ink))]">
          <span className="label-caps">{copy.labels.company}</span>
          <input
            className="form-input"
            type="text"
            name="company"
            placeholder={copy.placeholders.company}
            maxLength={120}
            aria-invalid={Boolean(fieldErrors.company)}
            onChange={() => clearFieldError("company")}
          />
          {fieldErrors.company ? <p className="field-error">{fieldErrors.company}</p> : null}
        </label>

        <label className="space-y-2 text-sm text-[rgb(var(--ink))]">
          <span className="label-caps">{copy.labels.email}</span>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder={copy.placeholders.email}
            aria-invalid={Boolean(fieldErrors.email)}
            onChange={() => clearFieldError("email")}
            required
          />
          {fieldErrors.email ? <p className="field-error">{fieldErrors.email}</p> : null}
        </label>

        <label className="space-y-2 text-sm text-[rgb(var(--ink))]">
          <span className="label-caps">{copy.labels.projectType}</span>
          <select
            className="form-input"
            name="projectType"
            defaultValue=""
            aria-invalid={Boolean(fieldErrors.projectType)}
            onChange={() => clearFieldError("projectType")}
            required
          >
            <option value="" disabled>
              {copy.placeholders.projectType}
            </option>
            {copy.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {fieldErrors.projectType ? (
            <p className="field-error">{fieldErrors.projectType}</p>
          ) : null}
        </label>

        <label className="space-y-2 text-sm text-[rgb(var(--ink))] md:col-span-2">
          <span className="label-caps">{copy.labels.message}</span>
          <textarea
            className="form-textarea"
            name="message"
            placeholder={copy.placeholders.message}
            minLength={24}
            maxLength={2400}
            aria-invalid={Boolean(fieldErrors.message)}
            onChange={() => clearFieldError("message")}
            required
          />
          <div className="flex flex-wrap items-center justify-between gap-2">
            {fieldErrors.message ? (
              <p className="field-error">{fieldErrors.message}</p>
            ) : (
              <p className="text-xs leading-5 text-[rgb(var(--ink-muted))]">
                {copy.hints.message}
              </p>
            )}
            <p className="text-xs leading-5 text-[rgb(var(--ink-muted))]">{copy.hints.range}</p>
          </div>
        </label>

        <label className="hidden">
          Website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <p className="text-sm text-[rgb(var(--ink-muted))]">{copy.hints.preferredInput}</p>
        <button
          type="submit"
          className="button-primary w-full sm:w-auto"
          disabled={status.state === "loading"}
        >
          {status.state === "loading" ? copy.buttons.loading : copy.buttons.idle}
        </button>
      </div>
    </form>
  );
}
