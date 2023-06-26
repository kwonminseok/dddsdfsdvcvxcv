import React from "react"
import { Flex, Box, Avatar } from "@components/commons"

import { Wallet, Twitter, Instagram, Chrome } from "lucide-react"
import useWindowSize from "@libs/hooks/use-window-size"
// import Facebook from '@assets/icons/facebook';
// import Twitter from '@assets/icons/twitter';
// import Instagram from '@assets/icons/instargram';
interface IUserInfoProps {
  name?: string
}

const UserInfo = React.memo(({ name = "hi" }: IUserInfoProps) => {
  const sizeType = useWindowSize()
  const snsSizes = (sizeType as number) > 0 ? 32 : 24
  return (
    <Flex direction="column" align="center" justify="center">
      {/* profile */}
      <Avatar
        size={["104px", "160px"]}
        src={
          "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
        }
        boxSx={{ m: 6 }}
      />
      <Box
        sx={{
          fontSize: ["18px", "32px"],
          fontWeight: "bold",
          lineHeight: ["24px", "45px"],
        }}
      >
        {/* userName */}
        산이좋아1749{name}
      </Box>
      <Flex sx={{ alignItems: "center", mt: 2 }}>
        <Wallet size={16} style={{ marginRight: "4px" }} />
        <Box sx={{ fontWeight: "500", fontSize: [0, 2] }}>
          {/* user wallet */}
          0X123SD…FHT5769
        </Box>
      </Flex>

      <Box
        __css={{
          maxWidth: "972px",
          mx: "auto",
          position: "relative",
          textAlign: "center",
          my: "6",
          px: [5, 0],
          fontSize: "2",
          fontWeight: "normal",
          order: [2, ""],
        }}
      >
        {/* content */}
        <Box sx={{ fontSize: [1, 2] }}>
          미래해상은 1955년 국내 최초 해상보험 전업회사로 창립한 이래 고객께서
          주신 한결같은 사랑을 바탕으로 국내 손해보험 산업을 선도하고
          있습니다.고객의 신뢰를 기업 최고의 자산으로 생각하며 보험업계 최초로
          고객만족헌장을 선포하고 ‘마음이 합니다’ 라는 브랜드 슬로건을 바탕으로
          최상의 서비스를 펼치기 위해 노력하고 있습니다.
        </Box>
      </Box>
      <Flex
        sx={{
          alignItems: "center",
          justifyContent: "center",
          order: [0, 1],
          pt: 6,
          minWidth: ["160px", "240px"],
          gap: ["16px", "24px"],
        }}
      >
        <Flex>
          <Twitter size={snsSizes} />
        </Flex>
        <Flex>
          <Instagram size={snsSizes} />
        </Flex>
        <Flex>
          <Chrome size={snsSizes} />
        </Flex>
      </Flex>
    </Flex>
  )
})

export default UserInfo
