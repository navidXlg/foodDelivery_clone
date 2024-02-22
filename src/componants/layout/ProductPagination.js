import ResturantInfo from "../ResturantInfo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import CardSkelton from "../../Pages/CardSkelton";




export default function ProductPagination({title, filtering, items, isLoading}){


    const [slideView, setSlideView] = useState(4); 
   

      // Adjust slide view based on window width
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
      

       return (
          <div className="my-20">
             {/* Render pagination section title */}
             <p className="text-2xl font-bold">{title}</p>
             {/* Render Swiper component for pagination */}
             {
               isLoading ? 
               <CardSkelton quntite={slideView - 1} classname="mt-5 items-center"/>:
               <Swiper 
               className="scroll-smooth sm: h-fit mt-7 flex items-center justify-center" 
               modules={[Navigation, A11y]}
               spaceBetween={30}
               slidesPerView={slideView}
               navigation
           >
               {/* Map through saleCenters and render each as a SwiperSlide */}
               {items?.sort((a, b) => b[filtering] - a[filtering]).map(item => (
                   <SwiperSlide key={item.id}>
                       <ResturantInfo item={item}/>
                   </SwiperSlide>
               ))}
           </Swiper>
             }

       </div>
     );
    };