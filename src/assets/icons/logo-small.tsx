import { Box } from "@components/commons"
import Logo from "../../../public/logosmall.svg"

interface LogoSmallProps {
  width: string
  color?: string
}

const LogoSmall = ({ width, color = "inherit" }: LogoSmallProps) => {
  return <Logo style={{ width: width, color: color }} />
}

export default LogoSmall
