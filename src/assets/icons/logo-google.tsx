import { Box } from "@components/commons"
import Logo from "../../../public/logo-google.svg"

interface LogoMainProps {
  width: string
  color?: string
}

const GoogleLogo = ({ width, color = "inherit" }: LogoMainProps) => {
  return <Logo style={{ width: width, color: color }} />
}

export default GoogleLogo
