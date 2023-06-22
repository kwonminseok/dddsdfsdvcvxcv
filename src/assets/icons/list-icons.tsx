import { Box, SVG } from "@components/commons"
import { BoxOwnProps } from "@components/commons/Box"
import { SVGProps } from "@components/commons/Svg"
import { Interpolation } from "@emotion/react"
import Iconslists from "./icons_list.json"

interface ListIconProps extends SVGProps {
  icons: keyof typeof Iconslists
}

const ListIcon = ({ icons, ...rest }: ListIconProps) => {
  const paths: string | string[] = Iconslists[icons].path
  const rect: any = Iconslists[icons].rect
  const line: any = Iconslists[icons].line
  return (
    <SVG
      viewBox={Iconslists[icons].viewBox}
      {...rest}
      stroke="currentColor"
      fill="none"
      stroke-width="2"
      stroke-linecap="round"
      stroke-strokeLinejoin="round"
    >
      {typeof paths == "string" ? (
        <path d={paths} />
      ) : (
        paths.map(item => <path d={item} />)
      )}
      {rect !== undefined && rect !== null ? (
        rect.map(item => <rect {...item} />)
      ) : (
        <></>
      )}
      {line !== undefined && line !== null ? (
        line.map(item => <line {...item} />)
      ) : (
        <></>
      )}
    </SVG>
  )
}

export default ListIcon
