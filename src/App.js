import { lazy } from "react";
import { BrowserRouter ,Routes, Route } from "react-router-dom";
import SuspenseLoading from "./Hooks/SuspenceLoading";
import ErrorPage from "./Pages/ErrorPage";
import PrivateRoutes from "./Hooks/PrivateRoutes";

// Lazy-loaded components for better code splitting and optimization
const HomePage = lazy(() => import("./Pages/HomePage/HomePage"));
const CustmorSubPage = lazy(() => import("./Pages/SalesSubmit/CustmorSubPage"));
const MainPage = lazy(() => import("./Pages/MainPage/MainPage"));
const ProductCenterPage = lazy(() => import("./Pages/ProductCenterPage"));



export default function App (){

// Set up BrowserRouter to enable routing
  return <BrowserRouter>
          <Routes>
            <Route path = "/" element = {<SuspenseLoading page={<HomePage/>}/>}/>
            <Route path ="/saleSubmit" element = {<SuspenseLoading page={<CustmorSubPage/>}/>}/>

            {/* Use PrivateRoutes component to handle protected routes */}
            <Route element = {<PrivateRoutes/>}>
              <Route path = "/ProductPage/:productID"  element = {<SuspenseLoading page={<ProductCenterPage/>}/>}/>
              <Route path = "/mainPage"  element = {<SuspenseLoading page={<MainPage/>}/>}/>
            </Route>
            <Route path="*" element = {<ErrorPage/>}/>
          </Routes>
        </BrowserRouter>
};