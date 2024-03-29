import NavabarHome from "./NavbarHome";
import Hero from "./Hero";
import pizza from "../../assets/hero-image.png";
import ProductsCatgory from "../../componants/ProductsCatgory";
import GroupingCard from "../../componants/GroupingCard";
import SalesCenters from "../../componants/Salescenters";
import Footer from "../../componants/layout/footer";

// Import custom hooks for scroll behavior and authentication
import { useScrollToTop } from "../../Hooks/useScrollTop";
import useAuthContext from "../../Hooks/useAuthContext";
import useRedirectIfActiveAccount from "../../Hooks/useRedirectActiveAccount";



export default function HomePage(){

   // Scroll to top on component mount
   useScrollToTop();
   
   // Retrieve active account and set model for authentication
   const {activeAccount, setModel} = useAuthContext();

   // Redirect if active account is present
   useRedirectIfActiveAccount(activeAccount, "/mainPage");

    return <main className="m-auto max-w-screen-2xl 3xl:mx-auto">
             <div className="lg:mx-24">
              <section className="lg:mt-16 rounded-br-[130px] bg-gray-50 relative rounded-md">
                <NavabarHome />
                <img src={pizza} className="z-20 relative w-screen sm:w-auto"/>
                <Hero />
                <ProductsCatgory
                onClick = {() => setModel("auth")} 
                className = "absolute bottom-36 transform  py-3 px-5 translate-x-1/2 translate-y-1/2 right-1/2 w-[87%] z-40"/>
              </section>
              <GroupingCard onClick = {() => setModel("auth")}/>
              <SalesCenters/>
             </div>
             <Footer/>
           </main>
    };