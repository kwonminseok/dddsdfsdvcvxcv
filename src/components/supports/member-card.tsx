import { Box, Flex, Avatar } from "@components/commons"
import Link from "next/link"

interface MemberCardProps {
  sizeType: number
}

const MemberCard = ({ sizeType }: MemberCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",

        mb: 3,
        transition: "all 0.3s ",
        ":hover": {
          boxShadow: "rgba(0,0,0,0.1) 0px 0px 15px",
          transform: "translateY(-2px)",
        },
      }}
    >
      <Box
        sx={{
          bg: "black05",
          borderRadius: "6px",
          boxShadow: "floody2",
          ":hover": { bg: "black05" },
        }}
      >
        <Link href={"/profile/1"} passHref legacyBehavior>
          <Flex sx={{ px: 6, py: 4, overflow: "hidden" }}>
            <Flex
              sx={{
                justifyContent: ["inherit", "space-between"],
                width: "100%",
                alignItems: "center",
              }}
            >
              <Flex>
                <Avatar
                  src={
                    "https://public.nftstatic.com/static/nft/webp/nft-extdata-loader/S3/1687117348836_qisaf0n3f5cs35v6e73o0x7kmkxh7rm7_400x400.webp"
                  }
                  boxSx={{ mr: "27px" }}
                  size={["48px", "48px"]}
                />
                {(sizeType as number) > 0 && (
                  <Flex direction="column">
                    <Box
                      sx={{
                        fontSize: 3,
                        fontWeight: "bold",
                        lineHeight: "24px",
                      }}
                    >
                      Dr.Pilates
                    </Box>
                    <Box sx={{ fontWeight: "normal" }}>0X123SD…FHT5769</Box>
                  </Flex>
                )}
              </Flex>
              {(sizeType as number) > 0 && (
                <Box sx={{ fontWeight: "medium" }}>2023.06.18 2:34 pm</Box>
              )}
              {(sizeType as number) < 1 && (
                <Flex direction="column">
                  <Box
                    sx={{ fontSize: 3, fontWeight: "bold", lineHeight: "24px" }}
                  >
                    Dr.Pilates
                  </Box>
                  <Box sx={{ fontSize: "12px", fontWeight: "16px" }}>
                    2023.06.18 2:34 pm
                  </Box>
                </Flex>
              )}
            </Flex>
          </Flex>
        </Link>
      </Box>
    </Box>
  )
}
export default MemberCard
