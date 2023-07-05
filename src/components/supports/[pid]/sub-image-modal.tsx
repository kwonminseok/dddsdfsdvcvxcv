import { Button, Modal, Box, Flex } from "@components/commons"
import { useState } from "react"
import styled from "@emotion/styled"
import ImageWrapper from "@components/imageWrapper"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
const ModalCard = styled.div`
  max-width: 800px;
  width: 100%;
  min-height: 30px;
  max-height: 100%px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 12px 24px;
  border-radius: 16px;
  .bottom_box {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 12px;
  }
`

interface SubImageModalProps {
  visible: boolean
  setVible: any
  src: string[] | undefined
  imageidx: number
  setImageidx: any
}

const SubImageModal = ({ visible, setVible, src, imageidx, setImageidx }: SubImageModalProps) => {
  //   const [imageidx, setImageidx] = useState<number>(0)

  const handleClickCancel = () => {
    setVible(false)
  }

  const clickLeft = () => {
    if (src) {
      if (imageidx == 0) {
        setImageidx(src.length - 1)
      } else setImageidx((prev: number) => prev - 1)
    }
  }

  const clickRight = () => {
    if (src) {
      if (imageidx == src.length - 1) {
        setImageidx(0)
      } else setImageidx((prev: number) => prev + 1)
    }
  }
  return (
    <Modal visible={visible}>
      <ModalCard>
        <Box sx={{ display: "flex", flexDirection: "row-reverse" }}>
          <Button sx={{ background: "transparent", outline: "none" }} onClick={handleClickCancel}>
            <X />
          </Button>
        </Box>
        <Flex sx={{ alignItems: "center" }}>
          {src && src.length > 1 && (
            <Box sx={{ pr: 2 }}>
              <Box sx={{ cursor: "pointer" }} onClick={clickLeft}>
                <ChevronLeft size={50} />
              </Box>
            </Box>
          )}
          <Box sx={{ width: "100%", height: "100%", position: "relative", py: 4 }}>
            <Box
              sx={{
                width: "100%",
                paddingBottom: "100%",
                position: "relative",
                borderRadius: "8px",
              }}
            >
              {src ? (
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    maxHeight: "100%",
                    backgroundImage: `url(${src[imageidx]})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                ></Box>
              ) : (
                <></>
              )}
            </Box>
            {/* <ImageWrapper
            brProps="8px"
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
          /> */}
          </Box>
          {src && src.length > 1 && (
            <Box sx={{ cursor: "pointer" }} onClick={clickRight}>
              <ChevronRight size={50} />
            </Box>
          )}
        </Flex>
      </ModalCard>
    </Modal>
  )
}
export default SubImageModal
