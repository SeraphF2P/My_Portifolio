
  type propsTypes = {
    classname?:string,
    children : JSX.Element,
    title:string,
    cipedBg:string,
    iD:string
  }
export default ({iD,classname,children,title,cipedBg}:propsTypes)=>{ 
 return (
  <>
<section id={iD} data-isintersecting="false"   className="section group">
<div  className={`group-data-[isintersecting="true"]:scale-x-100 scale-x-0 transition-transform duration-1000  w-full  min-h-[300px] flex ${classname} gap-2 p-8 cipedBg-${cipedBg} bg-skin-fill`}>
  <>
<h2 className="  p-8 md:p-12 text-mode-v-rl  capitalize text-center">{title}</h2>
{children}
  </>
  </div>
</section>
  
  </>
 )}