import React, { useEffect } from "react";
import logo from "../../../../../components/assets/icons/152x152.png";
import { SplashWrappper } from "./splashStyle";
import { useNavigate } from "react-router-dom";
import {pagesMenu} from "../../../../../menu"
const SplashScreen = () => {
 const  navigate =  useNavigate();


useEffect(() => {
  setTimeout(() => {
    
    navigate(`../${pagesMenu.scan.path}`)
  }, 1500);



}, [navigate])


  return (
    <SplashWrappper>
      <div className="pageWrapper">
        <img src={logo} alt="logo" />
      </div>
      <footer className="splash_footer" >
        <h6> Powered by</h6>
        <h4>Hotel Menu App </h4>
      </footer>
    </SplashWrappper>
  );
};

export default SplashScreen;
