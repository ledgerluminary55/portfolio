"use client"
import { useEffect, useState } from "react"
import AnimatedCursor from "react-animated-cursor";

export const CustomCursor = () => {
  const [domLoaded, setDomeLoaded] = useState(false)
  useEffect(()=>{
    setDomeLoaded(true)
  },[])
  return domLoaded ? (
    <AnimatedCursor 
      innerSize={12}
      innerStyle={{ backgroundColor: "#fff" }}
      outerSize={50}
      outerScale={1}
      outerStyle={{
        border: "1px solid #fff ",
        backgroundColor: "transparent",
    }}/>
  ):(<></>)
}