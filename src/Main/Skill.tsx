
import { useEffect, useRef, useState } from "react"
import {useCountUp} from "react-countup"
import { useEventListener, useOnScreen } from "../my/my"

type propsTypes={
  logos:JSX.Element,
  percent :number,
}
export default ({logos,percent} : propsTypes)=>{ 
  const ele = useRef<HTMLDivElement>(null);
 const {reset,start}= useCountUp({start:0, end :percent,duration:4,ref :ele});
const isOnScreen = useOnScreen(ele)
useEffect(()=>{
  isOnScreen?start() :reset();
},[isOnScreen])
 return (
  <>
   <div className=" shadow-md relative  flex h-[160px] w-[160px] flex-col items-center justify-center gap-2 rounded-full bg-slate-100 text-black text-center capitalize">  
<div className=" flex gap-2">{logos}</div>
 
<div className={` flex items-center justify-center`}><span ref={ele}/> %</div>
            <svg
            className="absolute s top-0"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="160px"
              height="160px"
              
            >
              <defs>
                <linearGradient id="progress_light_mode">
                  <stop offset="0%" stopColor="#211edb"  />
                  <stop offset="100%" stopColor="#1499ec" />
                </linearGradient>
              </defs>
              <circle  className={`skill stroke-[url(#progress_light_mode)] group-data-[isintersecting="true"]:animate-progress`} cx="80" cy="80" r="70" strokeLinecap="round" />
            </svg>
            
            </div>
  </>
 )}