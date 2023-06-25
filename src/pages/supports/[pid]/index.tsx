import Head from "next/head"
import { Box, Flex } from "@components/commons"
import Wrapper from "@components/supports/[pid]/Wrapper"
import ImageWrapper from "@components/imageWrapper"
import SupportStory from "./component/support-story"
import DetailInfo from "./component/detail-info"
import MakerInfo from "./component/maker-info"
import BlockInfo from "./component/block-info"
import useWindowSize from "@libs/hooks/use-window-size"
import SupportInfo from "./component/support-info"
import MemberList from "./component/member-list"
export default function Support() {
  const sizeType = useWindowSize()
  return (
    <>
      <Head>
        <title>Supports</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Wrapper>
        <Flex sx={{ flexWrap: "wrap", justifyContent: "space-between" }}>
          <Box sx={{ width: ["100%", "324px", "467px"] }}>
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
            {(sizeType as number) > 0 && (
              <Box sx={{ pt: 6 }}>
                <SupportStory sizeType={sizeType as number} />
                <DetailInfo sizeType={sizeType as number} />
                <MakerInfo sizeType={sizeType as number} />
                <BlockInfo sizeType={sizeType as number} />
              </Box>
            )}
          </Box>
          <Flex
            sx={{
              flex: 1,
              flexDirection: "column",
              width: "auto",
              position: "relative",
              ml: [1, "90px"],
              mt: [6, 0],
            }}
          >
            <SupportInfo />
            {(sizeType as number) > 0 && <MemberList />}
          </Flex>
        </Flex>
        {(sizeType as number) < 1 && (
          <Box sx={{ width: "auto" }}>
            <SupportStory sizeType={sizeType as number} />
            <DetailInfo sizeType={sizeType as number} />
            <BlockInfo sizeType={sizeType as number} />
            <MakerInfo sizeType={sizeType as number} />
            <MemberList />
          </Box>
        )}
      </Wrapper>
    </>
  )
}