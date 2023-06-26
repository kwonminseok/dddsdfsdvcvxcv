import { useState, useEffect, useRef } from "react"
import throttle from "lodash/throttle"

const useHeaderBorder = () => {
  const scrollPositionref = useRef<number>(0)
  const [scrollPosition, setScrollPosition] = useState<number>(0)
  const [isborder, setIsBorder] = useState<boolean>(false)
  useEffect(() => {
    const updatePosition = throttle(() => {
      // if(window.scrollY < scrollPositionref.current){
      //     setDirection(true)
      // }else{
      //     setDirection(false)
      // }
      // console.log(window.screenY)
      if (window.scrollY > 10) {
        setIsBorder(true)
      } else {
        setIsBorder(false)
      }
      // setScrollPosition(window.scrollY)
      // scrollPositionref.current = window.scrollY
    }, 20)

    window.addEventListener("scroll", updatePosition)
    // document.addEventListener

    // updatePosition();
    return () => window.removeEventListener("scroll", updatePosition)
  }, [])

  return isborder
}

export default useHeaderBorder
