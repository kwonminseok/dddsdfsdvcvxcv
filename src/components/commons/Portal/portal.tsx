import { ReactNode, useEffect, useState } from "react"
import ReactDOM from "react-dom"

interface PortalProps {
  children: ReactNode
  selector?: string
}

const Portal = ({ children, selector }: PortalProps) => {
  const [element, setElement] = useState<HTMLElement | null>(null)

  useEffect(() => {
    if (selector) {
      setElement(document.getElementById(selector))
    }
  }, [selector])

  if (!element) return null

  return ReactDOM.createPortal(children, element)
}

export default Portal
