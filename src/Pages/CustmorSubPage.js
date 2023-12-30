import InfoTable from "../componants/InfoTable";
import NavbarSub from "../componants/NavbarSub";
import SnappFoodBenifit from "../componants/SnappFoodBenifit";
import SubmitionForm from "../componants/SubmitionForm";
import SubmitionInfo from "../componants/SubmitionInfo";




export default function CustmorSubPage(){

    return<> 
           <div dir="rtl" className="px-56 pb-10 bg-purpleSnapp-400">
              <NavbarSub/>
              <SubmitionForm/>
           </div>
           <div className="text-center px-56" dir="rtl">
           <SnappFoodBenifit/>                                              
           <SubmitionInfo/> 
           <InfoTable/>
           </div>
           </>

};