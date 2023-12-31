import CustmorSubPage from "./Pages/CustmorSubPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom"





export default function App (){

  return<BrowserRouter>
          <Routes>
            <Route path = "/" element = {<HomePage/>}/>
            <Route path ="/saleSubmit" element = {<CustmorSubPage/>}/>
          </Routes>
        </BrowserRouter>

};