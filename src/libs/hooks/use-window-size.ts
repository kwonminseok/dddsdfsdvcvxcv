import { useEffect, useState } from "react"

// width만 사이즈 3개 구분해서 리턴하자
// md: '767px', 0
// lg: '1023px', 1
// xl : '1079px' 2

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<number | undefined>(undefined)
  // console.log('windowsize')
  // console.log(windowSize)
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        // console.log(window.innerWidth)
        // console.log(windowSize)
        if (window.innerWidth < 767) {
          // if(windowSize !==0){
          setWindowSize(0)
          // }
        } else if (window.innerWidth < 1023) {
          // if(windowSize !==1){
          setWindowSize(1)
          // }
        } else {
          // if(windowSize !==2){
          setWindowSize(2)
          // }
        }
        // setWindowSize(window.innerWidth)
      }

      window.addEventListener("resize", handleResize)
      handleResize()

      return () => window.removeEventListener("resize", handleResize)
    } else {
      return () =>
        window.removeEventListener("resize", () => {
          return null
        })
    }
  }, [])
  return windowSize
}

export default useWindowSize
