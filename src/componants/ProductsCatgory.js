import { catgoryItems } from "../data/data";



export default function ProductsCatgory({className}){


    return <div 
            className = {`hidden py-5 md:flex items-center justify-around w-3/4 w-max-[76rem] backdrop-blur-md backdrop-contrast-125  rounded-lg ${className}`} dir="rtl">
            {
             catgoryItems.map(item => 
             <div key={item.title} className="w-10 cursor-pointer flex flex-col items-center">
                <img src = {item.src} className="hover:animate-pulse"/>
                <p>{item.title}</p>
             </div>)   
            }
           </div>
 };