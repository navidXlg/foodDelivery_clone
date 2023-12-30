import NavbarSub from "../componants/NavbarSub";
import SnappFoodBenifit from "../componants/SnappFoodBenifit";
import SubmitionForm from "../componants/SubmitionForm";




export default function CustmorSubPage(){

    return<> 
           <div dir="rtl" className="px-56 pb-10 bg-purpleSnapp-400">
              <NavbarSub/>
              <SubmitionForm/>
           </div>
           <SnappFoodBenifit/>
           </>

};