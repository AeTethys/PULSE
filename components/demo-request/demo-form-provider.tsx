"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

interface DemoFormContextType {
  isOpen: boolean
  openForm: () => void
  closeForm: () => void
}

const DemoFormContext = createContext<DemoFormContextType | undefined>(undefined)

export function DemoFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openForm = () => setIsOpen(true)
  const closeForm = () => setIsOpen(false)

  return <DemoFormContext.Provider value={{ isOpen, openForm, closeForm }}>{children}</DemoFormContext.Provider>
}

export function useDemoForm() {
  const context = useContext(DemoFormContext)
  if (context === undefined) {
    throw new Error("useDemoForm must be used within a DemoFormProvider")
  }
  return context
}
