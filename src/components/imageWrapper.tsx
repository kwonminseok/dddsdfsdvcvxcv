import { Box } from "./commons"
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component"
import { ThemeUICSSProperties } from "@libs/css"

interface ImageWrapper extends LazyLoadImageProps {
  brProps?: ThemeUICSSProperties["borderRadius"]
}

const ImageWrapper = ({ brProps = "0px", ...props }: ImageWrapper) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        paddingBottom: "100%",
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
          sx={{
            width: "100%",
            height: "100%",
            border: "0px solid",
            borderRadius: brProps,
          }}
        >
          <LazyLoadImage {...props} />
        </Box>
      </Box>
    </Box>
  )
}
export default ImageWrapper
