import { useRef } from "react";
import { useEffect } from "react";

export default ()=>{ 
    const ele = useRef(null);
   
    const phrases = ['Hello World !!!', 'junior web-developer', 'love to code']
    let i = 0
    let j = 0 
    let currentPhrase: string[] = []
    let isDeleting = false;
    let isEnd = false;
    function loop () {
      isEnd = false
       const textDisplay = ele.current as unknown as HTMLParagraphElement ;
       
      textDisplay.innerHTML = currentPhrase.join('')
    
      if (i < phrases.length) {
    
        if (!isDeleting && j <= phrases[i].length) {
          currentPhrase.push(phrases[i][j])
          j++
          textDisplay.innerHTML = currentPhrase.join('')
        }
    
        if(isDeleting && j <= phrases[i].length) {
          
          currentPhrase.pop();
          j--
          textDisplay.innerHTML = currentPhrase.join('')
        }
    
        if (j == phrases[i].length) {
          isEnd = true
          isDeleting = true
        }
    
        if (isDeleting && j === 0) {
          currentPhrase = []
          isDeleting = false
          i++
          if (i === phrases.length) {
            i = 0
          }
        }
      }
      const spedUp = Math.random() * (80 -50) + 50;
      const normalSpeed = Math.random() * (300 -200) + 200;
      const time = isEnd ? 2000 : isDeleting ? spedUp : normalSpeed
      setTimeout(loop, time)
    }
    useEffect(()=>{
        loop()

    },[])

 return (
  <>
   <p ref={ele} className=" capitalize h-6  border-0 border-r-2 border-solid border-white"></p>
  </>
 )}