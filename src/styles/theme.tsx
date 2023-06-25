import type { ThemeUIStyleObject, Theme } from "@libs/css"

const palette = {
  main30: "#f57f8b",
  main50: "#f54e5e",
  main70: "#c23e4a",
  sub: "#1393ff",
  spot: "#00dab8",
  fail: "#ff5746",
  black90: "#191919",
  black70: "#4d4d4d",
  black50: "#808080",
  black30: "#b3b3b3",
  black20: "#cccccc",
  black10: "#e6e6e6",
  black05: "#f2f2f2",
}

export const theme: Theme = {
  space: {
    0: 0,
    1: 4,
    2: 8,
    3: 12,
    4: 16,
    5: 20,
    6: 24,
    7: 28,
    8: 32,
    9: 36,
    10: 40,
    11: 48,
    12: 60,
    13: 72,
    14: 84,
    15: 96,
    lg: 48,
    line: 1,
    ls: 12,
    md: 24,
    plus: 32,
    s: 10,
    sm: 16,
    tiny: 2,
    xl: 64,
    xp: 40,
    xs: 8,
    xxl: 80,
    xxs: 6,
  },
  breakpoints: ["767px", "1023px", "1279px"],
  fontSizes: {
    0: 12,
    1: 14,
    2: 16,
    3: 18,
    4: 20,
    5: 24,
    6: 28,
    7: 32,
    lg: 28,
    md: 16,
    minor: 18,
    plus: 20,
    sm: 14,
    xl: 32,
    xp: 24,
    xs: 12,
    xxl: 40,
    xxxl: 48,
    xxxxl: 56,
  },
  fontWeights: {
    bold: 700,
    extraLight: 200,
    light: 300,
    medium: 500,
    normal: 400,
    regular: 400,
    semibold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    avatar: 48,
    inputCode: 44,
    inputCodeMobile: 40,
  },
  colors: {
    ...palette,
    t: {
      primary: "#111",
    },
  },
  radii: {
    circle: "50%",
    default: 4,
    extra: 8,
    extraLarger: 20,
    large: 6,
    larger: 10,
    small: 2,
    xlarge: 16,
    xxlarge: 26,
  },
  shadows: {
    area: "0px 0px 20px rgba(0, 0, 0, 0.08)",
    floody3: "4px 4px 6px 0 rgba(0, 0, 0, 0.4)",
    shadow3: "2px 3px 5px 0 rgba(0, 0, 0, 0.4)",
    selectedTab: "inset 0px -2px 0px #191919",
    calendar:
      " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
    card: " 0px 1px 2px rgba(20,21,26,0.04), 0px 3px 6px rgba(71,77,87,0.04), 0px 0px 1px rgba(20,21,26,0.1)",
    dialog:
      "0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)",
    dropdown: "0px 8px 16px rgba(24, 26, 32, 0.16)",
    elevation1:
      "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
    elevation2:
      "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
    elevation3:
      "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)",
    tooltip:
      " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
    scard:
      "rgba(24, 26, 32, 0.1) 0px 0px 1px, rgba(71, 77, 87, 0.04) 0px 3px 6px, rgba(24, 26, 32, 0.04) 0px 1px 2px",
    scardhover:
      "rgba(24, 26, 32, 0.1) 0px 0px 1px, rgba(71, 77, 87, 0.08) 0px 7px 14px, rgba(24, 26, 32, 0.08) 0px 3px 6px",
    myscard: "3px 3px 10px 0 rgba(0, 0, 0, 0.5)",
    makercardProfile:
      "2px 2px 5px 0 rgba(0, 0, 0, 0.4), 2px 2px 5px 0 rgba(0, 0, 0, 0.5)",
  },
  zIndices: {
    alert: 1350,
    backTop: 1225,
    calendar: 1250,
    drawer: 9999,
    dropdown: 1100,
    header: 1001,
    mask: 10,
    menu: 1000,
    mobileDatePopup: 1275,
    modal: 1200,
    notification: 1300,
    tooltip: 1400,
  },
  text: {
    addressLink: {
      fontSize: "sm",
      fontWeight: "normal",
      lineHeight: "20px",
      textDecoration: "underline",
    },
    body1: {
      fontSize: "md",
      fontWeight: "normal",
      lineHeight: "24px",
    },
    body2: {
      fontSize: "sm",
      fontWeight: "normal",
      lineHeight: "20px",
    },
  },
  tabs: {
    container: {
      boxShadow: "inset 0px -1px 0px currentColor",
      color: "black30",
    },
  },
}
