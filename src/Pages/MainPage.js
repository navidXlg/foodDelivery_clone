import BestProducts from "../componants/BestProducts";
import GroupingCard from "../componants/GroupingCard";
import MainNavbar from "../componants/MainNavbar";
import NewProductsSnapp from "../componants/NewProducts";
import SalesCenters from "../componants/Salescenters";
import SpecialTaste from "../componants/SpecialTastes";
import UserSuggetion from "../componants/UserSuggestion";
import Footer from "../componants/footer";




export default function MainPage(){

    return <div dir="rtl">
              <MainNavbar/>
              <div className="mx-24">
                <GroupingCard classname = "mt-72"/>
                <UserSuggetion/>
                <NewProductsSnapp/>
                <BestProducts/>
                <SpecialTaste/>
              </div>
              <div dir="ltr">
              <SalesCenters/>
              </div>
              <Footer/>
            </div>

  };