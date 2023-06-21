import { ThemeUIStyleObject } from "@libs/css"
import React, { useRef, useState, useEffect } from "react"
import { Box } from "./commons"

interface ContentsProps {
  contents: React.ReactNode
  line: number
  boxSx?: ThemeUIStyleObject
}

const MoreContents = ({ contents = "", line, boxSx }: ContentsProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isTextOverflow, setIsTextOverflow] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (contentRef.current) {
      const handleResize = () => {
        const contentContainer = contentRef.current!

        if (contentContainer.scrollHeight > contentContainer.clientHeight) {
          setIsTextOverflow(true)
        } else {
          setIsTextOverflow(false)
        }
      }
      window.addEventListener("resize", handleResize)
      handleResize()
      return () => window.removeEventListener("resize", handleResize)
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null
        })
    }
  }, [])

  const styles = isOpen
    ? { display: "block", WebkitLineClamp: line }
    : {
        display: "-webkit-box",
        minHeight: "36px", //getMinHeight(),
        WebkitLineClamp: line,
      }

  return (
    <Box sx={{ mb: 8 }}>
      <Box
        __css={{
          position: "relative",
          mt: [3, 4],
          mb: [3, 5],
          mr: "auto",
          overflow: "hidden",
          textOverflow: "ellipsis",
          wordWrap: "break-word",
          WebkitBoxOrient: "vertical",
          ">p": {
            whiteSpace: "pre-line",
          },
          ...styles,
        }}
        sx={boxSx}
        ref={contentRef}
      >
        <Box as="p">{contents}</Box>
      </Box>
      {!isOpen ? (
        isTextOverflow && (
          <Box
            onClick={() => setIsOpen(true)}
            sx={{ color: "black50", fontSize: [0, 1], cursor: "pointer" }}
          >
            더 보기
          </Box>
        )
      ) : (
        <Box
          onClick={() => setIsOpen(false)}
          sx={{ color: "black50", fontSize: [0, 1], cursor: "pointer" }}
        >
          접기
        </Box>
      )}
    </Box>
  )
}

export default MoreContents
