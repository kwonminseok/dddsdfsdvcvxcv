import React, { useEffect, useRef } from "react"
import { Box } from "../Box"
import { PinInput } from "./pin-input"

const PIN_MIN_VALUE = 0
const PIN_MAX_VALUE = 9
const BACKSPACE_KEY = "Backspace"

interface PinInputLoginProps {
  pin: Array<number | undefined>
  pinLength: number
  onPinChanged: (pinEntry: number | undefined, idx: number) => void
  isValidating: boolean
  validationMessage?: string | undefined
  validationResult: boolean | undefined
  forceFocus?: any
}
export const removeValuesFromArray = (valuesArray: string[], value: string) => {
  const valueIndex = valuesArray.findIndex(entry => entry === value)
  if (valueIndex === -1) {
    return
  }
  valuesArray.splice(valueIndex, 1)
}

const PinLogin: React.FC<PinInputLoginProps> = ({
  pin,
  pinLength,
  onPinChanged,
  isValidating,
  validationMessage,
  validationResult,
  forceFocus,
}) => {
  const inputRefs = useRef<any[]>([])

  const changePinFocus = (pinIdx: number) => {
    const ref = inputRefs.current[pinIdx]
    if (ref) {
      ref.focus()
    }
  }

  useEffect(() => {
    changePinFocus(0)
  }, [forceFocus])

  const onChange = (event: React.ChangeEvent<HTMLInputElement>, idx: number) => {
    const previousValue = event.target.defaultValue
    const valuesArray = event.target.value.split("")
    removeValuesFromArray(valuesArray, previousValue)
    const value = valuesArray.pop()
    if (!value) {
      return
    }
    const pinNumber = Number(value.trim())
    if (isNaN(pinNumber) || value.length === 0) {
      return
    }
    if (pinNumber >= PIN_MIN_VALUE && pinNumber <= PIN_MAX_VALUE) {
      onPinChanged(pinNumber, idx)
      if (idx < pinLength - 1) {
        changePinFocus(idx + 1)
      }
    }
  }

  const onKeyDown = (event: any, idx: number) => {
    const keyboardKeyCode = event.nativeEvent.code
    if (keyboardKeyCode !== BACKSPACE_KEY) {
      return
    }

    if (pin[idx] === undefined) {
      onPinChanged(undefined, idx - 1)
      changePinFocus(idx - 1)
    } else {
      onPinChanged(undefined, idx)
    }
  }

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {Array.from({ length: pinLength }, (_, idx) => (
          <PinInput
            disabled={isValidating}
            // isCorrect={validationResult}
            onKeyDown={e => onKeyDown(e, idx)}
            key={idx}
            ref={el => {
              if (el) {
                inputRefs.current[idx] = el
              }
            }}
            onChange={e => onChange(e, idx)}
            value={pin[idx] || ""}
          />
        ))}
      </Box>
    </>
  )
}

export default PinLogin
