import {
    ArrayInterpolation,
    CSSObject,
    Interpolation,
    jsx,
    useTheme,
} from '@emotion/react'
import React, { forwardRef } from 'react'
import { Assign } from '../types'

import {css, get, ThemeUICSSProperties, ThemeUIStyleObject} from '@libs/css'

const boxSystemProps = [
    // space scale props (inherited from @styled-system/space)
    'margin',
    'marginTop',
    'marginRight',
    'marginBottom',
    'marginLeft',
    'marginX',
    'marginY',
    'm',
    'mt',
    'mr',
    'mb',
    'ml',
    'mx',
    'my',
    'padding',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    'paddingX',
    'paddingY',
    'p',
    'pt',
    'pr',
    'pb',
    'pl',
    'px',
    'py',
    // color props (inherited from @styled-system/color)
    'color',
    'backgroundColor',
    'bg',
    'opacity',
  ] as const

type BoxSystemPropsKey = (typeof boxSystemProps)[number]
type BoxSystemProps = Pick<ThemeUICSSProperties, BoxSystemPropsKey>

export interface BoxOwnProps extends BoxSystemProps {
    as?: React.ElementType
    variant?: string
    css?: Interpolation<any>
    sx?: ThemeUIStyleObject
}


export interface BoxProps extends Omit<
    Assign<React.ComponentPropsWithRef<'div'>, BoxOwnProps>,
    'ref'> {}



/*
** __isBoxStyledSystemProp
** boxSystemProps 에 prop가 있는지 확인
*/
export const __isBoxStyledSystemProp = (prop: string) =>
    (boxSystemProps as readonly string[]).includes(prop)



/*
**  pickSystemProps
** BoxOwnProps 타입의 객체를 받아서,
** Pick<BoxOwnProps, (typeof boxSysytemProps)[number] : BoxOwnProps에서 
*/    
    
const pickSystemProps = (props: BoxOwnProps) => {
    const res: Partial<Pick<BoxOwnProps, BoxSystemPropsKey>> = {}
    for (const key of boxSystemProps) {
          // ts2590: union is too large
      ;(res as any)[key] = props[key]        
    }
    return res    
}