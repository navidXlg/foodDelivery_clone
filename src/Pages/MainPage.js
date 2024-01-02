import GroupingCard from "../componants/GroupingCard";
import MainNavbar from "../componants/MainNavbar";
import ResturantInfo from "../componants/ResturantInfo";




export default function MainPage(){

    return <div dir="rtl">
              <MainNavbar/>
              <GroupingCard classname = "mt-72"/>
              <ResturantInfo/>
            </div>

  };