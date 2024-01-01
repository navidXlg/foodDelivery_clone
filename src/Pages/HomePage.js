import NavabarHome from "../componants/NavbarHome";
import Hero from "../componants/Hero";
import pizza from "../assets/hero-image.png";
import ProductsCatgory from "../componants/ProductsCatgory";
import GroupingCard from "../componants/GroupingCard";
import SalesCenters from "../componants/Salescenters";
import Footer from "../componants/footer";
import { useScrollToTop } from "../Hooks/useScrollTop";



export default function HomePage(){

   useScrollToTop(); 

    return <main className="m-auto">
             <section className="mt-16 rounded-br-[130px] bg-gray-100 relative mx-24 3xl:mx-auto rounded-sm max-w-screen-2xl">
                <NavabarHome/>
                <img src={pizza} className="z-20 relative"/>
                <Hero/>
                <ProductsCatgory classname = " py-5 px-36 absolute top-3/4 z-40"/>
             </section>
             <GroupingCard/>
             <SalesCenters/>
             <Footer/>
           </main>
   };