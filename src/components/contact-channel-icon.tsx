import { cn } from "@/lib/utils";

type ContactChannelIconProps = {
  kind: "email" | "linkedin";
  className?: string;
};

export function ContactChannelIcon({ kind, className }: ContactChannelIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={cn("h-5 w-5 text-[rgb(var(--ink))]", className)}
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {kind === "email" ? (
        <>
          <rect x="3.25" y="5.25" width="17.5" height="13.5" rx="2.75" />
          <path d="M4.5 7L12 12.5L19.5 7" />
        </>
      ) : (
        <>
          <rect x="4.25" y="4.25" width="15.5" height="15.5" rx="3" />
          <path d="M8.25 10.25V15.75" />
          <path d="M8.25 8.25H8.27" />
          <path d="M11.5 15.75V12.5C11.5 11.26 12.22 10.25 13.62 10.25C15.01 10.25 15.75 11.26 15.75 12.5V15.75" />
          <path d="M11.5 12.72C11.5 11.48 12.22 10.47 13.62 10.47C15.01 10.47 15.75 11.48 15.75 12.72" />
        </>
      )}
    </svg>
  );
}
