import { Box } from "@components/commons"
import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component"

interface ImageWrapper {
  src: string
}

const CardImageWrapper = ({ src, ...props }: ImageWrapper) => {
  return (
    <Box
      sx={{
        display: ["contents", "block"],
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
            borderRadius: ["8px", "8px 8px 0px 0px"],
            border: "0px solid",
          }}
        >
          <LazyLoadImage
            src={src}
            wrapperClassName="lazy-load-image-wrapper"
            effect="blur"
            wrapperProps={{
              style: {
                display: "flex",
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                border: "0px solid",
              },
            }}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
export default CardImageWrapper
