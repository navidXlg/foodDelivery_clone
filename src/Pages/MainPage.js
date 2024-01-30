import GroupingCard from "../componants/GroupingCard";
import MainNavbar from "../componants/MainNavbar";
import SalesCenters from "../componants/Salescenters";
import ProductPagination from "../componants/layout/ProductPagination";
import Footer from "../componants/layout/footer";


export default function MainPage(){

    return <div dir="rtl" className="max-w-screen-2xl 2xl:mx-auto">
              <MainNavbar/>
              <div className="mx-2 sm:mx-12 md:mx-24">
                <GroupingCard className = "mt-24 sm:mt-36 md:mt-72"/>
                <ProductPagination title = "پیشنهادکاربران" filterType ="rating"/>
                <ProductPagination title = "تازه ترین ها" filterType ="commentCount"/>
                <ProductPagination title = "برترین ها" filterType ="rating"/>
                <ProductPagination title = "مزه های خاص" filterType ="rating"/>
              </div>
              <div dir="ltr">
              <SalesCenters/>
              </div>
              <Footer/>
            </div>
  };