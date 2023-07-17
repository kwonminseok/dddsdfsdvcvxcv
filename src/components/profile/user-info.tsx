import React from "react"
import { Flex, Box, Avatar, Skeleton, SVG } from "@components/commons"
import useWindowSize from "@libs/hooks/use-window-size"
import { transformedEOA } from "@libs/utils/transformed"
import { createIcon } from "@icons/icons"
// import Facebook from '@assets/icons/facebook';
// import Twitter from '@assets/icons/twitter';
// import Instagram from '@assets/icons/instargram';
interface IUserInfoProps {
  user:
    | {
        nickname: string
        eoa: string
        email?: string
        _id?: string
      }
    | undefined
}

const UserInfo = React.memo(({ user, ...props }: IUserInfoProps) => {
  const sizeType = useWindowSize()
  const snsSizes = (sizeType as number) > 0 ? 32 : 24
  return (
    <Flex direction="column" align="center" justify="center">
      {/* profile */}

      {user ? (
        <Avatar
          size={["104px", "160px"]}
          src={
            "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
          }
          boxSx={{ m: 6 }}
        />
      ) : (
        <Box sx={{ m: 6 }}>
          <Skeleton sx={{ width: ["104px", "160px"], height: ["104px", "160px"] }} radius="50%" />
        </Box>
      )}
      {user ? (
        <Box
          sx={{
            fontSize: ["18px", "32px"],
            fontWeight: "bold",
            lineHeight: ["24px", "45px"],
          }}
        >
          {user.nickname}
        </Box>
      ) : (
        <Box>
          <Skeleton sx={{ height: "31px", minWidth: "276px" }} />
        </Box>
      )}
      <Flex sx={{ alignItems: "center", mt: 2 }}>
        {user ? (
          <>
            <SVG fill="1a1a1a" size={["16px"]} viewBox="0 0 222 222">
              {createIcon("wallet")}
            </SVG>
            {/* <Wallet size={16} style={{ marginRight: "4px" }} /> */}
            <Box sx={{ pl: 2, fontWeight: "500", fontSize: [0, 2] }}>
              {/* user wallet */}
              {transformedEOA(user.eoa)}
            </Box>
          </>
        ) : (
          <>
            {" "}
            <Box sx={{ pr: 2 }}>
              <Skeleton sx={{ width: "24px", height: "24px" }} />
            </Box>
            <Skeleton sx={{ height: "13px", minWidth: "152px" }} />
          </>
        )}
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
        <Box sx={{ fontSize: [1, 2] }}></Box>
      </Box>
      {/* <Flex
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
      </Flex> */}
    </Flex>
  )
})

export default UserInfo
