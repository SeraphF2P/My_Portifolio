
import {  useOpenState } from "../Context";
import {  useScrollSensore,useActive } from "../my/my";
import useScrollLock from "../my/myCustomHooks/useScrollLock";

export default ()=>{ 
    const elementRef = useScrollSensore({
      selector:'#main',
      from:"transform:translateY(0px)",
      to:"transform:translateY(-80px)",
      onHold:"transform:translateY(0px)"
   },);
  const [open,setOpen] = useOpenState()
   useActive({ elementsClass:".menu_item"});
   useScrollLock(open,"#main")

 return (
  <>
  <header ref={elementRef} className= {` w-full transition-transform duration-500 z-20 fixed`} >
    <nav className= {` ${open?"bg-white/0": "bg-white/10 shadow-sm"}   mx-auto flex flex-row-reverse backdrop-blur-md 
     items-center justify-between 
     max-w-screen-md h-20 px-4`}  >
<button type="button" className={`${open && "rotate-90"} z-[999] relative transition-transform duration-500 delay-500  burger_btn`} 
onClick={()=> {setOpen((pre: boolean)=>!pre)}} >
                    <div >
                    <span className={`${open ? "translate-y-2 rotate-45 scale-x-100" : "translate-y-0 rotate-0 scale-x-100"} btn_line`} />
                    <span className={`${open ? "translate-y-2 rotate-0 scale-x-0" : "translate-y-[12.8px] scale-x-100"} btn_line `} />
                    <span className={`${open ? "translate-y-2 -rotate-45 scale-x-100":"translate-y-[25.6px]"} btn_line` }  />
                    </div>
    <span className="v_hidden">Menu</span>
</button>
 <ul className={` ${open?"hidden": "flex"} -start text-6xl gap-4 items-center justify-center`} >
    <li className="menu_item"><a href="#home">home</a></li>
    <li className="menu_item"><a href="#about">about</a></li>
    <li className="menu_item"><a href="#skills">skills</a></li>
    <li className="menu_item"><a href="#experience">experience</a></li>
    <li className="menu_item"><a href="#myContact">my contact</a></li>
 </ul>
 
    </nav>
  </header>
  </>
 )}