export const ICON_NAME = {
  logo_small: "logo_small",
} as const

type TIcon = "logo_small"

export type IconName = TIcon //(typeof ICON_NAME)[keyof typeof ICON_NAME]
