import * as React from "react"

import { cn } from "@/lib/utils"

type MarqueeProps = React.ComponentProps<"div"> & {
  gap?: string
  duration?: string
  pauseOnHover?: boolean
  repeat?: number
}

function Marquee({
  className,
  children,
  gap = "1.25rem",
  duration = "30s",
  pauseOnHover = true,
  repeat = 2,
  style,
  ...props
}: MarqueeProps) {
  return (
    <div
      data-slot="marquee"
      className={cn("group/marquee flex w-full overflow-hidden", className)}
      style={
        {
          gap,
          "--marquee-gap": gap,
          "--marquee-duration": duration,
          ...style,
        } as React.CSSProperties
      }
      {...props}
    >
      {Array.from({ length: repeat }).map((_, index) => (
        <div
          key={index}
          aria-hidden={index > 0}
          className={cn(
            "flex shrink-0 items-center justify-around gap-[var(--marquee-gap)] animate-marquee",
            pauseOnHover && "group-hover/marquee:[animation-play-state:paused]"
          )}
        >
          {children}
        </div>
      ))}
    </div>
  )
}

export { Marquee }
