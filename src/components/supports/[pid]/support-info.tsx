import { Avatar, Box, Button, Flex, Skeleton } from "@components/commons"
import MoreContents from "@components/more-contents"
import { LuInfo } from "react-icons/lu"
import { Share2, MoreVertical } from "lucide-react"
import MintButton from "./mint-button"
import { Suspense, useCallback } from "react"
import { InfoBox, InfoBOxLoading } from "./info-box"
import { useTranslation } from "next-i18next"
interface TMaker {
  _id: string
  name: string
  profileImage: string
}

interface SupportInfo {
  maker: TMaker
  title: string
  useMintPeriod: boolean
  startMintDate: number
  endMintDate?: number | undefined
  _id: string
  digit?: number
}

const formattedDate = (date: any) => {
  const now = new Date(date)
  return `${now.getFullYear()}.${("0" + (now.getMonth() + 1)).slice(-2)}.${("0" + now.getDate()).slice(-2)} ${(
    "0" + now.getHours()
  ).slice(-2)}:${("0" + now.getMinutes()).slice(-2)}`
}

const SupportInfo = ({ maker, title, useMintPeriod, startMintDate, endMintDate, _id, digit = 4 }: SupportInfo) => {
  const { t } = useTranslation("support")

  const howTogetContent = useCallback(
    (digit: number) => {
      return t("enterdigit", { digit }) //`Enter ${digit} digits of Secret Code`
    },
    [digit, t],
  )

  const issuedPeriodContent = useCallback(() => {
    if (useMintPeriod) {
      return `${formattedDate(startMintDate)} - ${formattedDate(endMintDate)}`
    } else {
      const now = new Date().valueOf()
      if (startMintDate > now) {
        return `${formattedDate(startMintDate)} ~ `
      } else {
        return t("anypossible")
      }
    }
  }, [useMintPeriod, startMintDate, endMintDate])

  return (
    <Flex
      sx={{
        mb: [4, 6],
        minHeight: ["0px", "467px"],
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Flex sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}>
          {/* maker */}
          <Flex sx={{ alignItems: "center" }}>
            {maker ? (
              <Avatar src={maker.profileImage} boxSx={{ mr: [2, 4] }} border="1px solid " size={[32, 40]} />
            ) : (
              <Skeleton height={["32px", "40px"]} sx={{ width: ["32px", "40px"], mr: [2, 4] }} radius="50%" />
            )}

            <Box
              sx={{
                lineHeight: "28px",
                fontSize: [1, 2],
                fontWeight: "medium",
              }}
            >
              {maker ? <>{maker.name}</> : <Skeleton height={"16px"} sx={{ minWidth: "80px" }} radius="4px" />}
            </Box>
          </Flex>
        </Flex>

        {title ? (
          <Box
            sx={{
              fontSize: [3, 7],
              fontWeight: "bold",
              mb: 4,
              overflow: "hidden",
              textOverflow: "ellipsis",
              wordWrap: "break-word",
              wordBreak: "break-all",
              WebkitBoxOrient: "vertical",
              display: "-webkit-box",
              WebkitLineClamp: 3,
            }}
          >
            {title}
          </Box>
        ) : (
          <Skeleton height={"40px"} sx={{ width: "80%", mb: 4 }} radius="4px" />
        )}
        {/* </Box> */}

        {useMintPeriod !== undefined ? (
          <>
            <InfoBox title={t("whocanget")} content={t("contributesupport")} />
            <InfoBox title={t("howtoget")} content={howTogetContent(digit)} />
            <InfoBox title={t("issueperiod")} content={issuedPeriodContent()} />
          </>
        ) : (
          <>
            <InfoBOxLoading />
            <InfoBOxLoading />
            <InfoBOxLoading />
          </>
        )}
      </Box>
      <Box>
        <Flex
          sx={{
            position: ["fixed", "static"],
            display: "flex",
            flexDirection: "column",
            padding: ["8px 16px", 0],
            width: ["100%", "auto"],
            zIndex: "1",
            bottom: "0px",
            left: "0px",
            bg: ["#fff", "inherit"],
          }}
        >
          {useMintPeriod !== undefined ? (
            <MintButton
              useMintPeriod={useMintPeriod}
              startMintDate={startMintDate}
              endMintDate={endMintDate}
              supportId={_id}
              pinLength={digit}
            />
          ) : (
            <Skeleton
              height={"48px"}
              sx={{ minWidth: "120px", width: ["100%", "50%"], minHeight: "48px" }}
              radius="4px"
            />
          )}
        </Flex>
        {maker ? (
          <Box
            sx={{
              display: ["flex", "flex"],
              bg: "black05",

              padding: ["12px 18px", "18px 24px"],
              borderRadius: "8px",
              mt: 6,
              alignItems: "center",
            }}
          >
            <LuInfo size={18} />
            <Box sx={{ lineHeight: "18px", ml: 2, fontSize: [0, 1] }}>{t("contactmanage", { maker })}</Box>
          </Box>
        ) : null}
      </Box>
    </Flex>
  )
}

export default SupportInfo
