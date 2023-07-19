import { Box } from "@components/commons"
import Logo from "../../../public/logo-small.svg"

interface LogoSmallProps {
  width: string
  color?: string
}

const LogoSmall = ({ width, color = "inherit" }: LogoSmallProps) => {
  return <Logo style={{ width: width, color: color }} />
}

export default LogoSmall
