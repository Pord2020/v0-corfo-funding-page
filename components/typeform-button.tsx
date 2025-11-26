"use client"

import { useMemo } from "react"
import { createPopup } from "@typeform/embed"
import "@typeform/embed/build/css/popup.css"
import type { ComponentProps } from "react"
import { Button } from "@/components/ui/button"

const DEFAULT_FORM_ID = "01KB0RGZW8NJ9219RW955ABYV4"

export type TypeformButtonProps = ComponentProps<typeof Button> & {
  formId?: string
}

export function TypeformButton({ formId = DEFAULT_FORM_ID, children, onClick, ...buttonProps }: TypeformButtonProps) {
  const popup = useMemo(() => createPopup(formId, { hideHeaders: true, hideFooter: true, autoClose: 0 }), [formId])

  return (
    <Button
      {...buttonProps}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented) return
        event.preventDefault()
        popup.open()
      }}
    >
      {children}
    </Button>
  )
}
