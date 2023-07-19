import { Box } from "@components/commons"
import Logo from "../../../public/logo-empty.svg"

interface LogoEmptyProps {
  width: string
  color?: string
}

const LogoEmpty = ({ width, color = "inherit" }: LogoEmptyProps) => {
  return <Logo style={{ width: width, color: color }} />
}

export default LogoEmpty
