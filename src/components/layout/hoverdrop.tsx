import { UserCircle2 } from "lucide-react"
import { Box, Portal } from "@components/commons"
import { usePopper } from "react-popper"
import React, { useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
const HoverDrop = () => {
  // 로그인 정보 있어야함.
  // 로그인 하세요 라던가.
  // 일단 로그인 후에 보인다 생각하자
  //  user정보있어야해
  const [hovered, setHovered] = useState<boolean>(false)
  const dropdownRef = useRef(null)
  const triggerRef = useRef(null)
  //   console.log(hovered)
  const handleMouseLeave = (event: any) => {
    // if(dropdownRef.current && dropdownRef.current.contains(event.target) || triggerRef.current.contains(event.target)){
    // }
    // console.log(event)
    // console.log(dropdownRef.current.contains(event.relatedTarget))
    // console.log(triggerRef.current.contains(event.relatedTarget))
    // if (triggerRef.current !== null) {
    //   if (triggerRef.current.contains(event.relatedTarget)) {
    //   }
    // } else if (dropdownRef.current) {
    // }
    // if (!dropdownRef.current!.contains(event.relatedTarget) && !triggerRef.current.contains(event.relatedTarget)) {
    //   setHovered(false)
    // }
  }
  const handleMouseEnter = () => {
    setHovered(true)
  }

  return (
    <>
      <Box
        sx={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
        ref={triggerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Box>
          <UserCircle2 size={30} color="#191919" />
        </Box>
        {/* {hovered &&
          createPortal(
            <Box
              //   className="dropdown-content "
              sx={{
                position: "absolute",
                display: "block",
                bg: "black05",
                minWidth: "180px",
                zIndex: "1",
              }}
              ref={dropdownRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              gd
            </Box>,
            document.body,
          )} */}

        {hovered && (
          <Portal selector="floody-dropdown">
            <Box>
              <Box
                //   className="dropdown-content "
                sx={{
                  position: "absolute",
                  display: "block",
                  bg: "black05",
                  minWidth: "180px",
                  zIndex: "1500",
                  top: "64px",
                  right: "36px",
                  minHeight: "180px",
                }}
                ref={dropdownRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                gd
              </Box>
            </Box>
          </Portal>
        )}
      </Box>
    </>
  )
}

export default HoverDrop
