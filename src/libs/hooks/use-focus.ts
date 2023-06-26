import { useState, useEffect, ForwardedRef, MutableRefObject } from "react"
export function useFocus<T extends HTMLElement>(ref: ForwardedRef<T>) {
  const [isFocused, setIsFocused] = useState(false)

  useEffect(() => {
    const onFocus = () => setIsFocused(true)
    const onBlur = () => setIsFocused(false)

    const node = (ref as MutableRefObject<T>).current

    if (node!) {
      node.addEventListener("focus", onFocus)
      node.addEventListener("blur", onBlur)
    }

    return () => {
      if (node) {
        node.removeEventListener("focus", onFocus)
        node.removeEventListener("blur", onBlur)
      }
    }
  }, [ref])

  return isFocused
}
