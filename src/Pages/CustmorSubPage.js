import CommonQuestions from "../componants/CommomnQuestions";
import InfoTable from "../componants/InfoTable";
import NavbarSub from "../componants/NavbarSub";
import SnappFoodBenifit from "../componants/SnappFoodBenifit";
import SubmitionForm from "../componants/SubmitionForm";
import SubmitionInfo from "../componants/SubmitionInfo";
import SubmitionStep from "../componants/SubmitionStep";
import Footer from "../componants/footer";
import { useScrollToTop } from "../Hooks/useScrollTop";





export default function CustmorSubPage(){

    useScrollToTop();

    return<> 
           <div dir="rtl" className="px-56 pb-10 bg-purpleSnapp-400">
               <NavbarSub/>
               <SubmitionForm/>
           </div>
           <div className="text-center px-56" dir="rtl">
               <SnappFoodBenifit/>                                              
               <SubmitionInfo/> 
               <InfoTable/>
               <SubmitionStep/>
               <CommonQuestions/>
           </div>
           <Footer/>
           </>

};