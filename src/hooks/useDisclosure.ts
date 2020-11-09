import * as React from 'react'

export function useDisclosure() {
  const [isOpen, setIsOpen] = React.useState(false)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)
  const toggle = () => setIsOpen((state) => !state)

  return {
    isOpen,
    setIsOpen,
    open,
    close,
    toggle,
  }
}
