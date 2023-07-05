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
  background-color: rgba(0, 0, 0, 0.4);
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
  children: React.ReactNode
}

const Modal = ({ maskClosable = true, visible = false, children }: ModalProps) => {
  // const [isOpen, setIsOpen] = useState<boolean>(false)/

  // const openModalHandler = () =>{
  //     setIsOpen(!isOpen)
  // }
  // const onMaskClick = (e) =>{
  //     if(e.target === e.currentTarget){
  //         onClose(e)
  //     }
  // }
  // const close = (e) =>{
  //     if(onClose){
  //         onClose(e)
  //     }
  // }

  return (
    <Portal selector="floody-portal">
      <ModalOverlay visible={visible} />
      <ModalWrapper
        tabIndex={-1}
        visible={visible}
        // onClick={maskClosable ? onMaskClick : null}
      >
        <ModalInner tabIndex={0}>{children}</ModalInner>
      </ModalWrapper>
    </Portal>
  )
}

export default Modal
