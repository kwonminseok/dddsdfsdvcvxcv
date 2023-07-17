import styled from "@emotion/styled"
import { Input, InputProps } from "../Input"
import { forwardRef } from "react"
interface ValidationResultParagraphProps {
  isCorrect?: boolean
}

// export const PinInput = styled.input<ValidationResultParagraphProps>`
//   width: 42px;
//   height: 42px;
//   border: 2px solid;
//   font-size: 12px;
//   text-align: center;
//   margin: 12px;
//   border-radius: 8px;
//   font-size: 16px;
//   border-color: ${props => {
//     switch (props.isCorrect) {
//       case true:
//         return "green"
//       case false:
//         return "red"
//       default:
//         return "#c3c3c3"
//     }
//   }};
// `

export const PinInput = forwardRef((props: InputProps, ref: any) => {
  return (
    <Input
      sx={{
        width: ["32px", "42px"],
        height: ["32px", "42px"],
        border: "2px solid",
        fontSize: [0, 2],
        borderRadius: "8px",
        textAlign: "center",
        borderColor: "#c3c3c3",
        m: [1, 3],
        ":focus-visible": {
          borderColor: "rgb(0, 95, 204)",
        },
      }}
      {...props}
      ref={ref}
    />
  )
})
export const ValidationResultParagraph = styled.p<ValidationResultParagraphProps>`
  color: ${props => (props.isCorrect ? "green" : "red")};
`
