import { Modal, Box, Flex } from "@components/commons"
import PinLogin from "@components/commons/PinLogin/pinlogin"
import styled from "@emotion/styled"
import useWindowSize from "@libs/hooks/use-window-size"
import axios from "axios"
import { Lock } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import Swal from "sweetalert2"
import ScaleLoader from "react-spinners/ScaleLoader"
interface PasswordModalProps {
  visible: boolean
  setVible: any
  pinLength?: number
  supportId?: string
}
const ModalCard = styled.div`
  max-width: 600px;
  width: 100%;
  min-height: 30px;
  max-height: 100%px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  padding: 24px 24px;
  border-radius: 16px;
  .bottom_box {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: 12px;
  }
`

const PasswordModal = ({ visible, setVible, pinLength = 4, supportId = "" }: PasswordModalProps) => {
  const sizeType = useWindowSize()

  const [pin, setPin] = useState<Array<number | undefined>>(new Array(pinLength))
  const [isValidating, setIsValidating] = useState(false)

  const onPinChanged = (pinEntry: number | undefined, idx: number) => {
    const newPin = [...pin]
    newPin[idx] = pinEntry

    setPin(newPin)
  }

  const validatePin = useCallback(async () => {
    setIsValidating(true)
    try {
      const result = await axios.get(`/api/supports/mint/issue?supportId=${supportId}&password=${pin.join("")}`)
      if (result.status == 200) {
        switch (result.data.message) {
          case "NOT_VALID_PASSWORD": {
            setVible(false)
            Swal.fire({
              title: "비밀번호 오류",
              text: "올바른 비밀번호를 입력해주세요 ",
              icon: "error",
              confirmButtonText: "확인",
            })
            break
          }
          case "NOT_VALID_STATUS": {
            //발급가능상태 아님
            setVible(false)
            Swal.fire({
              title: "발급 불가",
              text: "발급 가능 상태가 아닙니다",
              icon: "error",
              confirmButtonText: "확인",
            })
            break
          }
          case "SUCCESS": {
            setVible(false)
            Swal.fire({
              title: "발급 완료",
              text: "NFT 발급이 완료되었습니다",
              icon: "success",
              confirmButtonText: "확인",
            })
            break
          }
          case "DUPLICATED": {
            setVible(false)
            Swal.fire({
              title: "발급 불가",
              text: "중복 발급이 불가능한 NFT입니다",
              icon: "error",
              confirmButtonText: "확인",
            })
            break
          }
          case "LIMIT_OVER": {
            setVible(false)
            Swal.fire({
              title: "발급 불가",
              text: "모든 NFT가 발급되었습니다.",
              icon: "error",
              confirmButtonText: "확인",
            })
            break
          }
          case "NOT_VALID_DATE": {
            setVible(false)
            Swal.fire({
              title: "발급 불가",
              text: "발급 가능한 기한이 아닙니다",
              icon: "error",
              confirmButtonText: "확인",
            })
            break
          }
        }
      }
    } catch (e) {
      console.log(e)
    } finally {
      setIsValidating(false)
    }
  }, [pin])

  useEffect(() => {
    setPin(new Array(pinLength))
  }, [visible])

  useEffect(() => {
    if (pin.includes(undefined)) {
    } else {
      validatePin()
    }
  }, [pin])

  return (
    <Modal visible={visible} setVisible={setVible}>
      <ModalCard>
        <Flex sx={{ alignItems: "center", flexDirection: "column" }}>
          <Box sx={{ pb: 5 }}>
            <Box
              sx={{
                borderRadius: "50%",
                border: "1px solid rgb(239,176,171)",
                minWidth: ["48px", "64px"],
                minHeight: ["48px", "64px"],
                p: [3, 6],
              }}
            >
              <Flex
                sx={{
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  border: "none",
                  minWidth: ["32px", "48px"],
                  minHeight: ["32px", "48px"],
                  bg: "rgb(239,176,171)",
                }}
              >
                {(sizeType as number) > 0 ? (
                  <Lock size={26} strokeWidth={3} color="rgb(223,70,48)" />
                ) : (
                  <Lock size={18} strokeWidth={3} color="rgb(223,70,48)" />
                )}
              </Flex>
            </Box>
          </Box>
          <Box sx={{ fontSize: [3, 5], fontWeight: "bold", pb: 3 }}>발급 비밀번호 입력</Box>
          <Box sx={{ fontSize: [0, 2], lineHeight: "24px" }}>운영자로부터 받은 비밀번호를 입력하세요.</Box>

          <Box sx={{ pt: 6, position: "relative" }}>
            <PinLogin
              pin={pin}
              pinLength={pinLength as number}
              onPinChanged={onPinChanged}
              isValidating={isValidating}
              validationResult={undefined}
              forceFocus={visible}
            />
            <Box sx={{ position: "absolute", left: pinLength === 4 ? "110px" : "172px", top: 0 }}>
              <ScaleLoader loading={isValidating} color={"#f57f8b"} />
            </Box>
          </Box>
        </Flex>
      </ModalCard>
    </Modal>
  )
}
export default PasswordModal
