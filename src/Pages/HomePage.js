import Navabar from "../componants/Navbar";
import Hero from "../componants/Hero";
import pizza from "../assets/hero-image.png";


export default function HomePage(){

    return <main>
             <section className="mx-24 mt-16 bg-gray-100 p-8 pb-0 relative">
                <Navabar/>
                <img src={pizza} className="mr-[40.2rem] z-20 relative"/>
                <Hero/>
             </section>
           </main>
};