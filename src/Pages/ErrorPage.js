import SnappLogo from "../assets/SnappLogo";
import Button from "../componants/Button";
import { useNavigate } from "react-router-dom";



export default function ErrorPage(){


    const navigate = useNavigate();

    return <>
          <SnappLogo className="mx-auto mt-3 size-24"/>
          <div className="flex flex-col items-center justify-center mt-16  gap-5">
               <img src="https://snappfood.ir/static/images/error_404.png" alt="404Photo" className="mb-5"/> 
               <p className="text-lg font-semibold">!صفحه ای که به دنبالش بودید پیدا نشد</p>
               <Button 
               snapp
               btnHover 
               rounded 
               className ="text-white"
               onClick = {() => navigate("/")}
               >بازگشت به صفحه اصلی</Button>
          </div>
          </>
}