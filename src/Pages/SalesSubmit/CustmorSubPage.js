import CommonQuestions from "./CommomnQuestions";
import InfoTable from "./InfoTable";
import NavbarSub from "./NavbarSub";
import SnappFoodBenifit from "./SnappFoodBenifit";
import SubmitionForm from "./SubmitionForm";
import SubmitionStep from "./SubmitionStep";
import Footer from "../../componants/layout/footer";
import { useScrollToTop } from "../../Hooks/useScrollTop";
import SubmitionInfo from "./SubmitionInfo";

/**
 * CustomerSubPage component represents the main page for customer submissions.
 * It displays various sections related to submission, information, and common questions.
 */
export default function CustomerSubPage() {

    // Scroll to top when the component mounts
    useScrollToTop();

    return (
        <> 
            {/* Submission section */}
            <div dir="rtl" className="px-3 xl:px-24 2xl:px-56 pb-10 bg-purpleSnapp-400">
                <NavbarSub/> 
                <SubmitionForm/> 
            </div>
            {/* Information section */}
            <div className="text-center px-10 xl:px-24 2xl:px-56" dir="rtl">
                <SnappFoodBenifit/> 
                <SubmitionInfo/> 
                <InfoTable/> 
                <SubmitionStep/> 
                <CommonQuestions/> 
            </div>
            <Footer/> 
        </>
    );
}
