import Navabar from "../componants/Navbar";
import Hero from "../componants/Hero";
import pizza from "../assets/hero-image.png";
import ProductsCatgory from "../componants/ProductsCatgory";
import GroupingCard from "../componants/GroupingCard";
import SalesCenters from "../componants/Salescenters";
import Footer from "../componants/footer";


export default function HomePage(){

    return <main>
             <section className="mt-16 bg-gray-100 relative mx-24">
                <Navabar/>
                <img src={pizza} className=" z-20 relative"/>
                <Hero/>
                <ProductsCatgory/>
             </section>
             <GroupingCard/>
             <SalesCenters/>
             <Footer/>
           </main>
   };