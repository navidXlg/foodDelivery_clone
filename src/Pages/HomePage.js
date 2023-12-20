import Navabar from "../componants/Navbar";
import Hero from "../componants/Hero";
import pizza from "../assets/hero-image.png";
import ProductsCatgory from "../componants/ProductsCatgory";


export default function HomePage(){

    return <main>
             <section className="mx-24 mt-16 bg-gray-100  relative">
                <Navabar/>
                <img src={pizza} className=" z-20 relative"/>
                <Hero/>
                <ProductsCatgory/>
             </section>
           </main>
};