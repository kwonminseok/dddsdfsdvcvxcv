import { ThemeUIStyleObject, ThemeUICSSProperties } from "@libs/css"
import React, { useRef, useState, useEffect } from "react"
import { Box } from "./commons"

interface ContentsProps {
  contents: React.ReactNode
  line: number
  boxSx?: ThemeUIStyleObject
  moreSize?: ThemeUICSSProperties["fontSize"]
}

const MoreContents = ({
  contents = "",
  line,
  boxSx,
  moreSize = [0, 1],
}: ContentsProps) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const [isTextOverflow, setIsTextOverflow] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  console.log(isTextOverflow)
  useEffect(() => {
    if (contentRef.current) {
      const handleResize = () => {
        const contentContainer = contentRef.current!
        console.log(contentContainer.scrollHeight)
        console.log(contentContainer.clientHeight)
        if (contentContainer.scrollHeight > contentContainer.clientHeight + 1) {
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
    <Box>
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
            sx={{ color: "black50", fontSize: moreSize, cursor: "pointer" }}
          >
            더 보기
          </Box>
        )
      ) : (
        <Box
          onClick={() => setIsOpen(false)}
          sx={{ color: "black50", fontSize: moreSize, cursor: "pointer" }}
        >
          접기
        </Box>
      )}
    </Box>
  )
}

export default MoreContents
