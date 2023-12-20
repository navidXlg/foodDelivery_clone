import Navabar from "../componants/Navbar";
import Hero from "../componants/Hero";
import pizza from "../assets/hero-image.png";
import ProductsCatgory from "../componants/ProductsCatgory";
import GroupingCard from "../componants/GroupingCard";


export default function HomePage(){

    return <main className="mx-24">
             <section className="mt-16 bg-gray-100 relative">
                <Navabar/>
                <img src={pizza} className=" z-20 relative"/>
                <Hero/>
                <ProductsCatgory/>
             </section>
             <GroupingCard/>
           </main>
};