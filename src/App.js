import { Suspense, lazy } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
const HomePage = lazy(() => import("./Pages/HomePage"));
const CustmorSubPage = lazy(() => import("./Pages/CustmorSubPage"));
const MainPage = lazy(() => import("./Pages/MainPage"));
const ProductCenterPage = lazy(() => import("./Pages/ProductCenterPage"));


export default function App (){


  return <BrowserRouter>
          <Routes>
            <Route path="/" element = {
              <Suspense fallback = {<h1>The Page is Loading</h1>}>
                <ProductCenterPage/>
              </Suspense>
            }/>
            <Route path = "/HomePage" element = {<HomePage/>}/>
            <Route path ="/saleSubmit" element = {<CustmorSubPage/>}/>
            <Route path = "/mainPage"  element = {<MainPage/>}/>
          </Routes>
        </BrowserRouter>
};