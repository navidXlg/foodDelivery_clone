import { catgoryItems } from "../data/data";
import { useNavigate } from "react-router-dom";



export default function ProductsCatgory({className, ...rest}){
   const navigate = useNavigate();

   return (
      <div data-testid="Productscatgory" className={`hidden gap-3 text-sm md:flex items-center justify-around w-3/4 w-max-[76rem] backdrop-blur-md backdrop-contrast-125 rounded-lg ${className}`} dir="rtl">
          {/* Map through category items and render each category */}
          {catgoryItems.map( item => (
              <div key={item.title} onClick={() => navigate(`/ProductPage/${item.titleId}`)} {...rest} className="w-10 cursor-pointer flex flex-col justify-center items-center">
                  <img src={item.src} className="hover:animate-pulse size-10" alt={item.title} />
                  <p className="text-gray-700">{item.title}</p>
              </div>
          ))}
      </div>
  );
 };