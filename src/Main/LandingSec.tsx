
import Typing_effect from './Typing_effect';
export default ()=>{ 
   
 return (
  <>
   <section className="section" id="home">
          <div className=" flex flex-col justify-around p-16 items-center absolute 
          bg-linear-gradient  inset-y-20 inset-x-0 rounded-tl-[200px] rounded-br-[200px]">
          <div className="img_wrapper">
          <img src="https://picsum.photos/300/300" alt="user_photo" />
        </div>
        <div className=" flex flex-col justify-center items-center">
          <h1 className=' capitalize'>jafer ali</h1>
         <Typing_effect/>
        </div>
</div>
    </section >
  </>
 )}