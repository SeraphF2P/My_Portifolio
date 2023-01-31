
import { useOpenState } from '../Context';
import {BsCalendar2DateFill, BsFillPersonFill, BsFillTelephoneFill} from "react-icons/bs"
import {IoLocationSharp} from "react-icons/io5"
import {MdEmail} from "react-icons/md"
import {TbLanguageHiragana} from "react-icons/tb"
import { IconContext } from 'react-icons/lib';
export default ()=>{ 
    const [open,setOpen] = useOpenState();
 return (
  <>
     <section onBlur={()=>{setOpen(false)}} className={`${open ? "clipMenuEnd" : "clipMenuStart" } flex justify-center items-center  transition-[clip-path]    duration-1000 fixed bg-white/20 backdrop-blur-[40px] w-full max-w-screen-md mx-auto h-screen top-0 `}>
<div className=" inset-9 top-20 absolute p-4   flex flex-col items-start">
<IconContext.Provider value={{className:"text-xl inline "}}>
   <span className='info'><BsFillPersonFill/> jafer mohamad ali</span>
   <span className='info'><BsCalendar2DateFill/> 19/4/1998</span>
   <span className='info'><BsFillTelephoneFill/>0934108130 </span>
   <span className='info'><IoLocationSharp/> tartus city al_thawrah street</span>
   <span className='info'><MdEmail/> fanfar13@gmail.com</span>
   <span className='info'><TbLanguageHiragana/> arabic & english</span>
</IconContext.Provider>
</div>
<p className=' absolute bottom-20 text-xl  '>
   this project coded useing react , typescript,tailwind
</p>
        
     </section>
  
  </>
 )}