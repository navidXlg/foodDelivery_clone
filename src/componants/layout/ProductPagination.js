import ResturantInfo from "../ResturantInfo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import useSalesContext from "../../Hooks/useSalesContext";


export default function ProductPagination({title, filterType}){

    const {saleCenters, getSaleCenter} = useSalesContext();
    const [slideView, setSlideView] = useState(4); 

    useEffect(() => {
       getSaleCenter("resturants");
      },[]);
      
      const items = saleCenters.sort((a,b) => b.data[filterType] - a.data[filterType]);
      useEffect(()=>{

      window.addEventListener("resize", changeWidht);
         function changeWidht(){
            const width = window.innerWidth;
            if (1200 <= width && width < 1500) {
               setSlideView(3);
            } else if (850 <= width && width < 1200) {
               setSlideView(2);
            } else if (width < 850) {
               setSlideView(1);
            }else if(width >1500){
               setSlideView(4);
            }
         };

         return () => {
            window.removeEventListener("resize", changeWidht);
         };

       },[]);


    return <div className = "my-20">
             <p className = "text-2xl font-bold">{title}</p>
             <Swiper 
               className="scroll-smooth sm: h-fit mt-7 flex items-center justify-center" 
               modules={[Navigation, A11y]}
               spaceBetween={30}
               slidesPerView={slideView}
               navigation>
               {items?.map(item =>
                 <SwiperSlide>
                   <ResturantInfo item={item}/>
                 </SwiperSlide>
                 )}
               </Swiper>
           </div>
    };