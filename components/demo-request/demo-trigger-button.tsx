"use client"

import type React from "react"

import { Button, type ButtonProps } from "@/components/ui/button"
import { CalendarIcon } from "lucide-react"
import { useDemoForm } from "./demo-form-provider"

interface DemoTriggerButtonProps extends ButtonProps {
  children?: React.ReactNode
}

export function DemoTriggerButton({
  variant = "outline",
  size = "lg",
  className = "h-12 px-6 group",
  children,
  ...props
}: DemoTriggerButtonProps) {
  const { openForm } = useDemoForm()

  return (
    <Button variant={variant} size={size} className={className} onClick={openForm} {...props}>
      {children || (
        <>
          <span>Schedule a Demo</span>
          <CalendarIcon className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </>
      )}
    </Button>
  )
}
