import { useState } from "react"
import { Button } from "@components/commons"
import PasswordModal from "./password-modal"
import { useRecoilValue } from "recoil"
import { loginStatus } from "@/_states/user/selectors"
import { useTranslation } from "next-i18next"
interface MintButtonProps {
  useMintPeriod: boolean
  startMintDate: number
  endMintDate?: number
  supportId: string
  pinLength: number
}

const MintButton = ({ useMintPeriod, startMintDate, endMintDate, supportId, pinLength }: MintButtonProps) => {
  const [open, setOpen] = useState<boolean>(false)
  const { isLoading, isLoggedIn } = useRecoilValue(loginStatus)
  const { t } = useTranslation("support")
  const mintClick = () => {
    // Swal.fire({
    //   title: "발급 완료",
    //   text: "NFT 발급이 완료되었습니다",
    //   icon: "success",
    //   confirmButtonText: "확인",
    // })
    if (!isLoading) {
      if (isLoggedIn) {
        setOpen(true)
      } else {
        window.location.href = "/login"
      }
    }
  }

  const getIssued = () => {
    const now = new Date().valueOf()

    if (now < startMintDate) {
      // 오픈 전
      return (
        <Button
          sx={{
            width: ["100%", "50%"],
            minWidth: "120px",
            minHeight: "48px",
            backgroundColor: "black10",
            color: "blac70",
            boxShadow: ["none", "none"],
          }}
        >
          {t("yetissue")}
        </Button>
      )
    } else {
      if (useMintPeriod) {
        const endMintDateNumber = endMintDate as number

        if (now < endMintDateNumber) {
          // 발급 가능
          return (
            <Button
              sx={{
                width: ["100%", "50%"],
                minWidth: "120px",
                minHeight: "48px",
                backgroundColor: "main50",
                color: "black05",
                boxShadow: ["none", "floody3"],
              }}
              onClick={mintClick}
            >
              {t("getcertificate")}
            </Button>
          )
        } else {
          // 발급 기한 지남
          return (
            <Button
              sx={{
                width: ["100%", "50%"],
                minWidth: "120px",
                minHeight: "48px",
                backgroundColor: "black05",
                color: "blac70",
                boxShadow: ["none", "none"],
              }}
            >
              {t("issueend")}
            </Button>
          )
        }
      } else {
        // 발급 가능
        return (
          <Button
            sx={{
              width: ["100%", "50%"],
              minWidth: "120px",
              minHeight: "48px",
              backgroundColor: "main50",
              color: "black05",
              boxShadow: ["none", "floody3"],
            }}
            onClick={mintClick}
          >
            {t("getcertificate")}
          </Button>
        )
      }
    }
  }

  return (
    <>
      {getIssued()}
      <PasswordModal visible={open} setVible={setOpen} supportId={supportId} pinLength={pinLength} />
    </>
  )
}

export default MintButton
