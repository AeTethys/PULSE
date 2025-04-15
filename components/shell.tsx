import * as React from "react"

import { cn } from "@/lib/utils"

const Shell = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mx-auto max-w-7xl px-4 py-10 md:py-20 lg:py-32", className)} {...props}>
        {children}
      </div>
    )
  },
)
Shell.displayName = "Shell"

export { Shell }
