import { Box } from "@components/commons"
import { ThemeUICSSObject } from "@libs/css"
import { CSSProperties } from "react"
import { LazyLoadImage, LazyLoadImageProps } from "react-lazy-load-image-component"

interface ImageWrapper {
  src: string
  imageStyles?: CSSProperties
  boxSx?: ThemeUICSSObject
}

const CardImageWrapper = ({ src, imageStyles, boxSx, ...props }: ImageWrapper) => {
  return (
    <Box
      __css={{
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
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Box
          __css={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
          }}
          sx={boxSx}
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
              },
            }}
            style={{
              borderRadius: "8px",
              objectFit: "contain",
              overflow: "hidden",
              ...imageStyles,
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}
export default CardImageWrapper
