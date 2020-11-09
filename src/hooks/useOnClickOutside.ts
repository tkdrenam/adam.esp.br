import { useEffect, useCallback } from 'react'

const events = ['mousedown', 'touchstart']

export function useOnClickOutside(refs = [], handler, inputs = []) {
  if (!handler || typeof handler !== 'function') {
    throw new Error('[useOnClickOutside]: handler should be a function')
  }

  const refHandle = useCallback(handler, inputs)

  useEffect(() => {
    const listener = (event) => {
      let r = refs

      if (!Array.isArray(r)) {
        r = [refs]
      }

      if (
        !r.find(
          (ref) =>
            !ref ||
            event.button !== 0 ||
            (ref.current ? ref.current.contains(event.target) : ref.contains(event.target))
        )
      ) {
        refHandle(event)
      }
    }

    events.forEach((event) => {
      document.addEventListener(event, listener)
    })

    return () => {
      events.forEach((event) => {
        document.removeEventListener(event, listener)
      })
    }
  }, [refs, refHandle])
}
