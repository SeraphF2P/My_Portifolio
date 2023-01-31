import { useRef } from "react";
import { useOnScreen } from "./my/my";
import {FaFacebookSquare, FaLinkedin} from "react-icons/fa"
import {SiGmail, SiTelegram} from "react-icons/si"
import {IoLogoWhatsapp} from "react-icons/io"
import { IconContext } from "react-icons/lib";
export default ()=>{ 
const ele = useRef<HTMLDivElement>(null)
const isOnSecreen = useOnScreen(ele);

 return (
  <>
       <section ref={ele} id="myContact" className="section ">
          <div className={`${isOnSecreen ? " scale-y-100" : " scale-y-0"} flex flex-col transition-transform origin-bottom duration-700 absolute bottom-0 min-h-[320px] w-full cipedBg-top bg-skin-fill`}>
<div className="  w-full h-[200px]">

</div>
<ul className=" flex gap-2 justify-around  w-full p-4">
        <IconContext.Provider value={{size:"40", className:"text-white hover:scale-105 "}}>
        <li><a  rel="noopener" target="_blank"  href="https://www.facebook.com/jafer.ali.395669?mibextid=ZbWKwL"><FaFacebookSquare className=" hover:text-blue-500" /><span className=" v_hidden">facebook link icon</span></a></li>
        <li><a target="_blank" href="mailto:fanfar13@gmail.com"><SiGmail className=" hover:text-red-800" /><span className=" v_hidden">gmail link icon</span></a></li>
        <li><a rel="noopener" target="_blank" href="https://wa.me/+9630934108130"><IoLogoWhatsapp className=" hover:text-green-600" /><span className=" v_hidden">whatsapp link icon</span></a></li>
        <li><a rel="noopener" target="_blank" href="https://t.me/SeraphF2P"><SiTelegram className=" hover:text-sky-300" /><span className=" v_hidden">telegram link icon</span></a></li>
        <li><a rel="noopener" target="_blank" href="https://www.linkedin.com/in/jafer-ali-701b06253?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B0Hzrf1QYTfWOTOSSTlSpNQ%3D%3D"><FaLinkedin className=" hover:text-linkedin" /><span className=" v_hidden">linked link icon</span></a></li>
        </IconContext.Provider>
</ul>
          </div>
          </ section>
  </>
 )}