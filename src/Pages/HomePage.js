import NavabarHome from "../componants/NavbarHome";
import Hero from "../componants/Hero";
import pizza from "../assets/hero-image.png";
import ProductsCatgory from "../componants/ProductsCatgory";
import GroupingCard from "../componants/GroupingCard";
import SalesCenters from "../componants/Salescenters";
import Footer from "../componants/footer";
import { useScrollToTop } from "../Hooks/useScrollTop";
import useAuthContext from "../Hooks/useAuthContext";
import useRedirectIfActiveAccount from "../Hooks/useRedirectActiveAccount";



export default function HomePage(){


   useScrollToTop(); 
   const {activeAccount} = useAuthContext();
   useRedirectIfActiveAccount(activeAccount, "/mainPage");


    return <main className="m-auto max-w-screen-2xl 3xl:mx-auto">
             <div className="lg:mx-24">
              <section className="lg:mt-16 rounded-br-[130px] bg-gray-50 relative rounded-md">
                <NavabarHome/>
                <img src={pizza} className="z-20 relative w-screen sm:w-auto"/>
                <Hero/>
                <ProductsCatgory className = "absolute bottom-36 transform translate-x-1/2 translate-y-1/2 right-1/2 z-40"/>
              </section>
              <GroupingCard/>
              <SalesCenters/>
             </div>
             <Footer/>
           </main>
   };