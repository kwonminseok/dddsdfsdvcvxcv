import React, { useState, useRef, useEffect, forwardRef } from "react"
import { Box, BoxProps } from "../Box"
import { Input } from "../Input"
import { Flex } from "../Flex"
import { ForwardRef } from "../types"
import { ChevronDown } from "lucide-react"
// import { Box, BoxProps, forwardRef } from '@chakra-ui/react'
// import Input from '../Input/input'
// import DownArrow from '@assets/icons/downArrow'
import { DropOption } from "./options"
interface optionProps {
  content: string
  key: string
  url?: null | string
}

type TOmiting = "onChange"

interface SelectorProps extends Omit<BoxProps, TOmiting> {
  value: string
  onChange: (key: string) => void
  options: Array<optionProps>
}

export const Selector: ForwardRef<HTMLDivElement, SelectorProps> = forwardRef<HTMLDivElement, SelectorProps>(
  function Selector(props, ref) {
    const { value, onChange, options, ...rest } = props
    const containerRef = useRef<HTMLDivElement>(null)
    const dropdownRef = useRef<HTMLDivElement>(null)
    const [open, setOpen] = useState<boolean>(false)
    const ulStyles = open ? { display: "block", height: "auto" } : { display: "none", height: 0 }

    useEffect(() => {
      document.addEventListener("mousedown", handleClick, false)
      return () => document.removeEventListener("mousedown", handleClick, false)
    }, [])

    const handleClick = (e: any) => {
      if (containerRef.current?.contains(e.target)) {
        return
      }
      if (dropdownRef.current?.contains(e.target)) {
        return
      }
      setOpen(false)
    }

    const nowValue = options.find(e => e.key === value)
    return (
      <Box
        {...rest}
        __css={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          zIndex: "99",
          justifyContent: "space-between",
          cursor: "pointer",
          "&>svg": { fontSize: ["16px", "24px"], right: ["0px", "10px"] },
          "&>ul": { padding: "8px 0" },
        }}
        ref={containerRef}
        onClick={() => setOpen(prev => !prev)}
      >
        <Box sx={{ textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{nowValue?.content}</Box>
        <Box
          __css={{ display: "flex", alignItems: "center" }}
          sx={{
            transition: "transform 0.2s ease-in-out 0s, background-color 0.2s ease-in-out 0s",
            // bg: "0.2s ease-in-out 0s",
            transform: open ? "rotate(180deg)" : undefined,
          }}
        >
          <ChevronDown />
        </Box>
        <Box
          __css={{
            ...ulStyles,
            // left: 0,
            marginTop: "4px",
            maxHeight: "220px",
            minWidth: "100%! important",
            top: "100%",
            width: ["230px"],
            left: ["-140px", "-120px"],
            // width: "auto!important",
            borderRadius: "6px",
            border: "0.5px solid",
            borderColor: "black30",
            backdropFilter: "blur(8px)",
            position: "absolute",
            overflowY: "scroll",
            zIndex: "99",
            boxShadow: "floody5",
            backgroundColor: "rgba(242,242,242,0.6)",
            transition: "height 0.2s ease 0s",
            // boxShadow:
            //   "rgba(20, 21, 26, 0.08) 0px 3px 6px, rgba(71, 77, 87, 0.08) 0px 7px 14px, rgba(20, 21, 26, 0.1) 0px 0px 1px",
          }}
          ref={dropdownRef}
          as="ul"
          role="listbox"
        >
          {options.map((item, idx) => (
            <DropOption value={idx} key={idx} onClick={() => onChange(item.key)}>
              {item.content}
            </DropOption>
          ))}
        </Box>
      </Box>
    )
  },
)

//받은거 fontSize fontWeight height lineHeight onChange options p value
// const Selector = ForwardRef<HTMLDivElement,SelectorProps>((props,ref) =>{
//     const {value, onChange, options, ...rest} = props
//     const containerRef= useRef<HTMLDivElement>(null)
//     const dropdownRef = useRef<HTMLDivElement>(null)
//     const [open, setOpen] = useState<boolean>(false)
//     const ulStyles = open? {display:'block', height: 'auto'} : {display: 'none', height: 0}

//     useEffect(() => {
//         document.addEventListener('mousedown', handleClick, false)
//         return() => document.removeEventListener('mousedown', handleClick, false)
//       }, [])

//     const handleClick = (e : any) =>{
//         if(containerRef.current?.contains(e.target)){
//             return
//         }
//         if(dropdownRef.current?.contains(e.target)){
//             return
//         }
//         setOpen(false)
//     }

//     const nowValue = options.find(e=> e.key === value)
//     return(
//         <Box
//             position='relative'
//             {...rest}
//             sx={{display: 'flex', alignItems: 'center', zIndex: '99', justifyContent:"space-between",
//                 '&>svg':{fontSize: ['16px','24px'], right:['0px','10px']},
//                 '&>ul':{padding: '8px 0'}
//             }}
//             cursor='pointer'
//             ref={containerRef}
//             onClick={()=> setOpen((prev) => !prev)}
//         >
//             <Box sx={{textOverflow: "ellipsis", whiteSpace: 'nowrap'}}>
//                 {nowValue?.content}
//             </Box>
//             {/* <DownArrow/> */}
//             {/* <Input
//                 display='none'
//                 value={value}
//             /> */}

//             <Box
//                 __css={{
//                     ...ulStyles,
//                     left:0,
//                     marginTop: '4px',
//                     maxHeight: '220px',
//                     minWidth: '100%!important',
//                     top:"100%",
//                     width: "auto!important",
//                     //
//                     position: 'absolute',
//                     overflowY: 'scroll',
//                     zIndex: '99',
//                     backgroundColor: '#fff',
//                     transition: 'height 0.2s ease 0s',
//                     boxShadow: 'rgba(20, 21, 26, 0.08) 0px 3px 6px, rgba(71, 77, 87, 0.08) 0px 7px 14px, rgba(20, 21, 26, 0.1) 0px 0px 1px',
//                 }}
//                 ref={dropdownRef}
//                 as='ul'
//                 role='listbox'
//             >
//                 {options.map((item,idx) => (
//                     <DropOption
//                         value={idx}
//                         key={idx}
//                         onClick={() => onChange(item.key)}
//                     >{item.content}</DropOption>
//                 ))}
//             </Box>

//         </Box>
//     )
// })
// export default Selector;
