import { catgoryItems } from "../data/data";



export default function ProductsCatgory({className, ...rest}){


    return <div 
            className = {`hidden gap-3 text-sm md:flex items-center justify-around w-3/4 w-max-[76rem] backdrop-blur-md backdrop-contrast-125  rounded-lg ${className}`}dir="rtl">
            {
             catgoryItems.map(item => 
             <div key={item.title}  {...rest}  className="w-10 cursor-pointer flex flex-col justify-center items-center">
                <img src = {item.src} className="hover:animate-pulse size-10"/>
                <p className="text-gray-700">{item.title}</p>
             </div>)   
            }
           </div>
 };