import { Box } from "./commons"
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component"
import { ThemeUICSSProperties, ThemeUIStyleObject } from "@libs/css"

interface ImageWrapper extends LazyLoadImageProps {
  brProps?: ThemeUICSSProperties["borderRadius"]
  pb?: number | string[]
  boxSx?: ThemeUIStyleObject
}

const ImageWrapper = ({ brProps = "0px", pb = 100, boxSx, src, ...props }: ImageWrapper) => {
  const wrapperstyles = {
    paddingBottom: typeof pb === "number" ? `${pb}%` : pb,
  }
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        ...wrapperstyles,
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          __css={{
            width: "100%",
            height: "100%",
            border: "0px solid",
          }}
          sx={boxSx}
        >
          {src ? (
            <LazyLoadImage src={src} {...props} />
          ) : (
            <Box sx={{ bg: "black10", width: "100%", height: "100%" }}> </Box>
          )}
        </Box>
      </Box>
    </Box>
  )
}
export default ImageWrapper
