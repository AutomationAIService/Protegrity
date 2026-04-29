import { cn } from "@/lib/utils"

/**
 * Minimal abstract shield motif inspired by the Protegrity logo.
 * Used as bullet markers, icon containers, and watermark detail.
 * Not a replacement for the actual logo image.
 */
export function ProtegrityShield({
  className,
  strokeWidth = 1.5,
  filled = false,
}: {
  className?: string
  strokeWidth?: number
  filled?: boolean
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-4 w-4", className)}
      aria-hidden="true"
    >
      <path
        d="M12 2.5 4 5.5v6.2c0 4.7 3.3 8.7 8 9.8 4.7-1.1 8-5.1 8-9.8V5.5l-8-3Z"
        fill={filled ? "currentColor" : "none"}
        opacity={filled ? 0.18 : 1}
      />
      <path d="M4 5.5 12 8.5l8-3" />
      <path d="M8 11h8" />
      <path d="M9.5 14h5" />
    </svg>
  )
}
