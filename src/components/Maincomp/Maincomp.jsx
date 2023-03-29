import React from "react";
import MainDash from "../MainDash/MainDash";
import RightSide from "../RigtSide/RightSide";
import Sidebar from "../Sidebar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Orders from "../Orders/Orders";
import Customers from "../Customers/Customers";
import Products from "../Products/Products";
function Maincomp(){
    return(
        <>
        <BrowserRouter>
        
        
        <Sidebar/>
        <Routes>
            <Route path="/" element={<MainDash></MainDash>}></Route>
            <Route path="/helloo" element={<Orders></Orders>}></Route>
            <Route path="/cust" element={<Customers></Customers>}></Route>
            <Route path="/pro" element={<Products></Products>}></Route>
            
        </Routes>

        
    
          
            
        {/* <MainDash/> */}
        </BrowserRouter>
       
        
        


        </>

    )
}
export default Maincomp;