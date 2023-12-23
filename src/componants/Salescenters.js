import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import Button from "./Button";




export default function SalesCenters(){

    return <div className="bg-gray-100 px-10 flex items-center justify-between mx-24 mt-16 text-right">
              <div>
                <img src="https://snappfood.ir/static/images/vendor_pic.png"/>
              </div>
              <div>
                <p className="text-4xl mb-5">صاحب کسب و کار هستید ؟</p>
                <p className="text-lg mb-10 text-gray-800">با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
                <Button snapp rounded className = "font-semibold text-lg py-2 flex items-center gap-1 text-white float-right" >
                  <p> ثبت نام فروشندگان</p> 
                  <HiOutlineBuildingStorefront className="text-2xl"/>                  
                </Button>
              </div>
           </div>
};