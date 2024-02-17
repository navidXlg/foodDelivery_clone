import GroupingCard from '../../componants/GroupingCard';
import MainNavbar from "./MainNavbar";
import SalesCenters from '../../componants/Salescenters';
import ProductPagination from '../../componants/layout/ProductPagination';
import Footer from '../../componants/layout/footer';
import { useEffect } from 'react';
import useSalesContext from '../../Hooks/useSalesContext';



export default function MainPage() {

       // Retrieve sale centers and necessary functions from the context
       const {saleCenters, getSaleCenter, isLoading} = useSalesContext();

       // Fetch sale centers when component mounts
       useEffect(() => {
        getSaleCenter("resturants");
        },[]);
  

    return (
        <div dir="rtl" className="max-w-screen-2xl 2xl:mx-auto">
            {/* Render the main navigation bar */}
            <MainNavbar/>

            {/* Main content section */}
            <div className="mx-2 sm:mx-12 md:mx-24">
                <GroupingCard className="mt-24 sm:mt-36 md:mt-72"/>

                {/* Render different ProductPagination components */}
                <ProductPagination title="پیشنهادکاربران" filtering="rating" isLoading = {isLoading} items = {saleCenters}/>
                <ProductPagination title="تازه ترین ها" filtering="commentCount" isLoading = {isLoading} items = {saleCenters}/>
                <ProductPagination title="برترین ها" filtering="rating" isLoading = {isLoading} items = {saleCenters}/>
                <ProductPagination title="مزه های خاص" filtering="rating" isLoading = {isLoading} items = {saleCenters}/>
            </div>
            <div dir="ltr">
                <SalesCenters/>
            </div>
            <Footer/>
        </div>
    );
}
