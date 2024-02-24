import ResturantInfo from "../ResturantInfo";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import CardSkelton from "../../Pages/CardSkelton";




export default function ProductPagination({title, filtering, items, isLoading}){



       return (
          <div className="my-20">
             {/* Render pagination section title */}
             <p className="text-2xl font-bold">{title}</p>
             {/* Render Swiper component for pagination */}
             {
               isLoading ? 
               <CardSkelton quntite={4} classname="mt-5 items-center"/>:
               <Swiper  
               className="scroll-smooth sm:h-fit mt-14 pr-10" 
               modules={[Navigation, A11y]}
               spaceBetween={30}
               slidesPerView={4}
               navigation
               breakpoints={{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  // when window width is >= 768px
                  850: {
                    slidesPerView: 2,
                    spaceBetween: 30
                  },
                  // when window width is >= 1024px
                  1200: {
                    slidesPerView: 3,
                    spaceBetween: 50
                  },
                  // when window width is >= 1024px
                  1500: {
                     slidesPerView: 4,
                     spaceBetween: 50
                  }
                }}
           >
               {/* Map through saleCenters and render each as a SwiperSlide */}
               {items?.sort((a, b) => b[filtering] - a[filtering]).map(item => (
                   <SwiperSlide key={item.id} >
                       <ResturantInfo item={item}/>
                   </SwiperSlide>
               ))}
           </Swiper>
             }

       </div>
     );
    };