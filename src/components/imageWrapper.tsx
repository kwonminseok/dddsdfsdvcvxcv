import { Box } from "./commons"
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component"
import { ThemeUICSSProperties, ThemeUIStyleObject } from "@libs/css"

interface ImageWrapper extends LazyLoadImageProps {
  brProps?: ThemeUICSSProperties["borderRadius"]
  pb?: number
  boxSx?: ThemeUIStyleObject
}

const ImageWrapper = ({
  brProps = "0px",
  pb = 100,
  boxSx,
  ...props
}: ImageWrapper) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: `${pb}%`,
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
          <LazyLoadImage {...props} />
        </Box>
      </Box>
    </Box>
  )
}
export default ImageWrapper
