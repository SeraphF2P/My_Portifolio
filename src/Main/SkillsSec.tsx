
import Skill from "./Skill"
import {FaBootstrap, FaGitAlt, FaGithub, FaReact, FaSass} from "react-icons/fa";
import {SiAdobeillustrator, SiAdobephotoshop, SiHtml5, SiJavascript, SiTailwindcss, SiTypescript} from "react-icons/si";
import { IconContext } from "react-icons/lib";
export default ()=>{ 
 return (
  <>
<section id="skills"  data-isintersecting="false"  className="flex group justify-around gap-8 p-8 flex-wrap section">
<IconContext.Provider value={{size:"40"}}>
<Skill  percent={100} logos={<><SiHtml5 className=" text-red-700"/><FaSass className=" text-fuchsia-700"/></>}/>
<Skill  percent={90} logos={<><FaBootstrap className=" text-violet-600"/><SiTailwindcss className=" text-sky-400"/></>
}/>
<Skill  percent={80} logos={<><SiTypescript className=" text-blue-600"/><SiJavascript className=" text-amber-300"/></>
}/>
<Skill  percent={60} logos={<><FaGithub className=" text-github"/><FaGitAlt className=" text-gitlab"/></>
}/>
<Skill  percent={40} logos={<><SiAdobephotoshop className=" text-blue-600"/><SiAdobeillustrator className=" text-orange-500"/></>
}/>
<Skill  percent={70} logos={<><FaReact className=" text-react"/></>
}/>
</IconContext.Provider>
     </section>
  </>
 )}