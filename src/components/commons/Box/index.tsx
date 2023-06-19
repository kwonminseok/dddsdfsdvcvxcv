import {
  ArrayInterpolation,
  CSSObject,
  Interpolation,
  useTheme,
} from "@emotion/react";
import React, { forwardRef } from "react";
import type { Assign, ForwardRef } from "../types";
import type { __ThemeUIComponentsInternalProps } from "../util";

import { css, get, ThemeUICSSProperties, ThemeUIStyleObject } from "@libs/css";
const boxSystemProps = [
  // space scale props (inherited from @styled-system/space)
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  // color props (inherited from @styled-system/color)
  "color",
  "backgroundColor",
  "bg",
  "opacity",
] as const;

type BoxSystemPropsKey = (typeof boxSystemProps)[number];
type BoxSystemProps = Pick<ThemeUICSSProperties, BoxSystemPropsKey>;

export interface BoxOwnProps
  extends BoxSystemProps,
    __ThemeUIComponentsInternalProps {
  as?: React.ElementType;
  variant?: string;
  css?: Interpolation<any>;
  sx?: ThemeUIStyleObject;
  //   __css?: ThemeUIStyleObject;
}

export interface BoxProps
  extends Omit<
    Assign<React.ComponentPropsWithRef<"div">, BoxOwnProps>,
    "ref"
  > {}

/*
 ** __isBoxStyledSystemProp
 ** boxSystemProps 에 prop가 있는지 확인
 */
export const __isBoxStyledSystemProp = (prop: string) =>
  (boxSystemProps as readonly string[]).includes(prop);

/*
 **  pickSystemProps
 ** BoxOwnProps 타입의 객체를 받아서,
 ** PicK<T, U>  = T에서 U들 가져오기
 ** Pick<BoxOwnProps, (typeof boxSysytemProps)[number] : Pick<BoxOwnProps, BoxSystmePropsKey> = BoxSystemProps
 */

const pickSystemProps = (props: BoxOwnProps) => {
  const res: Partial<Pick<BoxOwnProps, BoxSystemPropsKey>> = {};
  for (const key of boxSystemProps) {
    // ts2590: union is too large
    (res as any)[key] = props[key];
  }
  return res;
};

export const Box: ForwardRef<any, BoxProps> = forwardRef<any, BoxProps>(
  function Box(props, ref) {
    const theme = useTheme();
    const {
      __themeKey = "variants",
      __css,
      variant,
      css: cssProp,
      sx,
      as: Component = "div",
      ...rest
    } = props as BoxProps;

    const baseStyles: CSSObject = {
      boxSizing: "border-box",
      margin: 0,
      minWidth: 0,
    };

    const __cssStyles = css(__css)(theme);
    const variantInTheme =
      get(theme, `${__themeKey}.${variant}`) || get(theme, variant);
    const variantStyles = variantInTheme && css(variantInTheme)(theme);

    const sxPropStyles = css(sx)(theme);

    const systemPropsStyles = css(pickSystemProps(rest))(theme);

    const style: ArrayInterpolation<unknown> = [
      baseStyles,
      __cssStyles,
      variantStyles,
      sxPropStyles,
      systemPropsStyles,
      cssProp,
    ];

    boxSystemProps.forEach((name) => {
      delete (rest as Record<string, unknown>)[name];
    });

    return <Component ref={ref} css={style} {...rest} />;
  }
);
