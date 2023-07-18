import { Box, Flex, Avatar } from "@components/commons"
import Link from "next/link"
import { transformedEOA } from "@libs/utils/transformed"
interface MemberCardProps {
  sizeType: number
  _id: string
  user: {
    nickname: string
    eoa: string
    _id: string
  }
  createdAt: string
}

// export function transformedString(str: string) {
//   return str.slice(0, 7) + "..." + str.slice(-7)
// }

function transformedDate(str: string) {
  const data = new Date(str)
  const year = data.getFullYear()
  const month = String(data.getMonth() + 1).padStart(2, "0")
  const day = String(data.getDate()).padStart(2, "0")
  const hour = String(data.getHours()).padStart(2, "0")
  const minute = String(data.getMinutes()).padStart(2, "0")

  return `${year}.${month}.${day} ${hour}:${minute}`
}

const MemberCard = ({ sizeType, _id, user, createdAt, ...props }: MemberCardProps) => {
  return (
    <Box
      sx={{
        width: "100%",
        mb: 3,
      }}
    >
      <Box
        sx={{
          bg: "black05",
          borderRadius: "6px",
          boxShadow: "floody2",
          ":hover": { bg: "black10" },
        }}
      >
        <Link href={`/profile/${user._id}`} passHref legacyBehavior>
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
                      {user.nickname}
                    </Box>
                    <Box sx={{ fontWeight: "normal" }}>{transformedEOA(user.eoa)}</Box>
                  </Flex>
                )}
              </Flex>
              {(sizeType as number) > 0 && <Box sx={{ fontWeight: "medium" }}>{transformedDate(createdAt)}</Box>}
              {(sizeType as number) < 1 && (
                <Flex direction="column">
                  <Box sx={{ fontSize: 3, fontWeight: "bold", lineHeight: "24px" }}>{user.nickname}</Box>
                  <Box sx={{ fontSize: "12px", fontWeight: "16px" }}>{transformedDate(createdAt)}</Box>
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
