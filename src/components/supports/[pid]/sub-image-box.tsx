import { Box } from "@components/commons"
import SubImageModal from "./sub-image-modal"
import { useState } from "react"
interface SubImageBoxProps {
  src: string
  onClick: any
}

const SubImageBox = ({ src, onClick }: SubImageBoxProps) => {
  return (
    <>
      <Box
        sx={{
          width: "100%",
          paddingBottom: "100%",
          position: "relative",
          borderRadius: "8px",
        }}
        onClick={onClick}
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            borderRadius: "8px",
            border: "1px solid",
            borderColor: "black05",
          }}
        ></Box>
      </Box>
      {/* <SubImageModal visible={visible} setVible={setVisible} src={src} /> */}
    </>
  )
}
export default SubImageBox
