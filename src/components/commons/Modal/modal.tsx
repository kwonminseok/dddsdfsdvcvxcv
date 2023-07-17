import { useState, useEffect } from "react"
import styled from "@emotion/styled"
import Portal from "../Portal/portal"

const ModalWrapper = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1310;
  overflow: auto;
  outline: 0;
`

const ModalOverlay = styled.div<{ visible: boolean }>`
  box-sizing: border-box;
  display: ${props => (props.visible ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1300;
  backdrop-filter: blur(10px);
`

const ModalInner = styled.div`
  box-sizing: border-box;
  position: relative;
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);
  //   background-color: #fff;
  border-radius: 10px;
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 40px 20px;
`

interface ModalProps {
  visible: boolean
  maskClosable?: boolean
  setVisible: any
  children: React.ReactNode
}

const Modal = ({ maskClosable = true, visible = false, setVisible, children }: ModalProps) => {
  const onMaskClick = (e: any) => {
    if (e.target === e.currentTarget) {
      console.log("들어옴")
      setVisible(false)
    }
  }

  return (
    <Portal selector="floody-portal">
      <ModalOverlay visible={visible} />
      <ModalWrapper tabIndex={-1} visible={visible}>
        <ModalInner tabIndex={0} onClick={maskClosable ? onMaskClick : undefined}>
          {children}
        </ModalInner>
      </ModalWrapper>
    </Portal>
  )
}

export default Modal
