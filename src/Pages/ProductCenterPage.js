import MainNavbar from "./MainPage/MainNavbar";
import ProductFilter from "../componants/ProductFilter";
import Footer from "../componants/layout/footer";
import ProductList from "../componants/ProductList";



export default function ProductCenterPage(){

    
    return <div dir="rtl" className="max-w-screen-2xl 2xl:mx-auto">
               <MainNavbar/>
               <div className="mx-6 grid grid-cols-4 mt-64">
                    <ProductFilter className ="col-span-1"/>
                    <ProductList className = "col-span-3"/>
               </div>
               <Footer/>
           </div>
  };