
import { useEffect, useRef } from "react"
import { useOpenState } from "../Context"
import Footer from "../Footer"
import AddictionSec from "./AddictionSec"
import LandingSec from "./LandingSec"
import Sec from "./Sec"
import SkillsSec from "./SkillsSec"


export default ()=>{

const mainEle = useRef<HTMLDivElement>(null)
useEffect(() => {
     const observer = new IntersectionObserver(
          (elements ) => {
              elements.forEach((element :IntersectionObserverEntry ) => {
               const theNewActiveNavElement = document.querySelector(`[href="#${element.target.id}"]`)?.closest("li");
               theNewActiveNavElement?.classList.toggle("active",element.isIntersecting);
              const ele = element.target as HTMLElement;
               ele.dataset.isintersecting = element.isIntersecting.toString();
              });
          }
      ,{rootMargin:"0px 0px", threshold:0.5});
      if(mainEle.current != null){
          [...mainEle.current.children]?.map((el) => observer.observe(el));
      }
 return(()=>{
     observer.disconnect()
 })
}, [])


    return(<>
    <main id="main" ref={mainEle} className=" remove_scroll_bar snaps-y-container h-screen  text-regular shadow-2xl bg-gradient-to-tr from-gray-300 to-white max-w-screen-md mx-auto " >
     <LandingSec   />
     <Sec  iD="about" title="about me" cipedBg="right" classname="  origin-right">
     <ul className="flex flex-col items-start justify-center gap-4 w-full  p-6 border-l-2 border-0 border-l-regular border-solid">
     <li className=" list-disc   ">passionate learner good at proplem solving and time mangment </li>
     <li className=" list-disc   ">able to maintain hight performace react website </li>
     <li className=" list-disc   "> able to create new fetures and customise them as needed </li>
     <li className=" list-disc   "> knowlage of working with api</li>
     <li className=" list-disc   "> writeing clean code</li>
      </ul>
     </Sec>
     <SkillsSec  />
     <Sec  iD="experience" title="courses & Exp" cipedBg="left" classname="flex-row-reverse origin-left ">

<ul className="flex flex-col items-start justify-center gap-4 w-full  p-6 border-r-2 border-0 border-r-regular border-solid">
     <li className=" list-disc   ">internship at Xcore company</li>
     <li className=" list-disc   ">Coursera Meta front-end React course </li>
     <li className=" list-disc   ">Web Dev simplified react hooks & custom hooks course </li>
     <li className=" list-disc   ">Elzero web shcool html,css,javascript full course</li>
     <li className=" list-disc   ">Ania kubow coding bootcamp</li>
      </ul>
    
     </Sec>
     <Footer />
     <AddictionSec/>
    </main>
    
    </>)
}