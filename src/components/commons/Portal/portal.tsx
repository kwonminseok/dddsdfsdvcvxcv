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
    } else {
      setElement(document.body)
    }
  }, [selector])

  if (!element) return null //ReactDOM.createPortal(children, document.body)

  return ReactDOM.createPortal(children, element)
}

export default Portal
