import GroupingCard from "../componants/GroupingCard";
import MainNavbar from "../componants/MainNavbar";
import SalesCenters from "../componants/Salescenters";
import ProductPagination from "../componants/ProductPagination";
import Footer from "../componants/footer";


export default function MainPage(){

    return <div dir="rtl" className="max-w-screen-2xl 2xl:mx-auto">
              <MainNavbar/>
              <div className="mx-2 sm:mx-12 md:mx-24">
                <GroupingCard className = "mt-24 sm:mt-36 md:mt-72"/>
                <ProductPagination title = "پیشنهادکاربران"/>
                <ProductPagination title = "تازه ترین ها"/>
                <ProductPagination title = "برترین ها"/>
                <ProductPagination title = "مزه های خاص"/>
              </div>
              <div dir="ltr">
              <SalesCenters/>
              </div>
              <Footer/>
            </div>

  };