import { Box, Flex, Skeleton, SVG } from "@components/commons"
import ImageWrapper from "@components/imageWrapper"
import SubImageBox from "@components/supports/[pid]/sub-image-box"
import SubImageModal from "@components/supports/[pid]/sub-image-modal"
import { useState } from "react"
import { useTranslation } from "next-i18next"
import { createIcon } from "@icons/icons"
const IDX_LIST = [0, 1, 2, 3]
const SupportStory = ({ description, subImages }: { description: string; subImages?: string[] }) => {
  const { t } = useTranslation("support")
  const [modalOpen, setModalOpen] = useState<boolean>(false)
  const [imageidx, setImageidx] = useState<number>(0)

  const clickImage = (idx: number) => {
    setImageidx(idx)
    setModalOpen(true)
  }
  return (
    <>
      <Box sx={{ mb: 7, width: "100%", mr: [0, 3] }}>
        <Flex sx={{ alignItems: "center", pb: 3 }}>
          <Flex sx={{ pr: 2, alignItems: "center", justifyContent: "center" }}>
            <SVG fill="1a1a1a" size={["18px", "24px"]} viewBox="0 0 222 222">
              {createIcon("story")}
            </SVG>
          </Flex>
          <Box
            sx={{
              fontSize: [2, 5],
              fontWeight: "bold",
              lineHeight: ["24px", "30px"],
            }}
          >
            {t("supportstory")}
          </Box>
        </Flex>
        <Box sx={{ width: "100%", fontSize: [1, 2], lineHeight: ["20px", "24px"] }}>
          {description ? (
            <>{description}</>
          ) : (
            <Box sx={{ gap: "13px", display: "flex", flexDirection: "column" }}>
              <Skeleton height={"15px"} sx={{ width: "90%" }} radius="4px" />
              <Skeleton height={"15px"} sx={{ width: "50%" }} radius="4px" />
              <Skeleton height={"15px"} sx={{ width: "30%" }} radius="4px" />
            </Box>
          )}
        </Box>
        <Flex sx={{ mt: 4 }}>
          <>
            {" "}
            {IDX_LIST.map((item, idx) => (
              <Box sx={{ flex: 1, mr: "9px" }}>
                {subImages && subImages[idx] ? (
                  <SubImageBox
                    key={idx}
                    src={subImages[idx]}
                    onClick={() => {
                      clickImage(idx)
                    }}
                  />
                ) : // <>
                // <Box
                //   sx={{
                //     width: "100%",
                //     paddingBottom: "100%",
                //     position: "relative",
                //     borderRadius: "8px",
                //   }}
                // >
                //   <Box
                //     sx={{
                //       position: "absolute",
                //       width: "100%",
                //       height: "100%",
                //       backgroundImage: `url(${subImages[item]})`,
                //       backgroundSize: "contain",
                //       backgroundRepeat: "no-repeat",
                //       backgroundPosition: "center",
                //       borderRadius: "8px",
                //       border: "1px solid",
                //       borderColor: "black05",
                //     }}
                //   ></Box>
                // </Box>
                // </>
                subImages ? (
                  <></>
                ) : (
                  <Skeleton sx={{ width: "100%", paddingBottom: "100%" }} />
                )}
              </Box>
            ))}
          </>

          {/* <Box sx={{ flex: 1, mr: "9px" }}>
          <ImageWrapper
            brProps="8px"
            src={
              "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
            }
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
      */}
        </Flex>
      </Box>
      <SubImageModal
        visible={modalOpen}
        setVible={setModalOpen}
        src={subImages}
        imageidx={imageidx}
        setImageidx={setImageidx}
      />
    </>
  )
}

export default SupportStory
