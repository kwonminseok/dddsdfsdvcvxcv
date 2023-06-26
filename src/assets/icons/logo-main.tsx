import { Box } from "@components/commons"
import Logo from "../../../public/logo-main.svg"

interface LogoMainProps {
  width: string
  color?: string
}

const LogoMain = ({ width, color = "inherit" }: LogoMainProps) => {
  return <Logo style={{ width: width, color: color }} />
}

export default LogoMain
