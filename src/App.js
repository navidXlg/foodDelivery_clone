import { lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import SuspenseLoading from "./Hooks/SuspenceLoading";
const HomePage = lazy(() => import("./Pages/HomePage"));
const CustmorSubPage = lazy(() => import("./Pages/CustmorSubPage"));
const MainPage = lazy(() => import("./Pages/MainPage"));
const ProductCenterPage = lazy(() => import("./Pages/ProductCenterPage"));


export default function App (){


  return <BrowserRouter>
          <Routes>
            <Route path="/" element = {<SuspenseLoading page={<ProductCenterPage/>}/>}/>
            <Route path = "/HomePage" element = {<SuspenseLoading page={<HomePage/>}/>}/>
            <Route path ="/saleSubmit" element = {<SuspenseLoading page={<CustmorSubPage/>}/>}/>
            <Route path = "/mainPage"  element = {<SuspenseLoading page={<MainPage/>}/>}/>
          </Routes>
        </BrowserRouter>
};