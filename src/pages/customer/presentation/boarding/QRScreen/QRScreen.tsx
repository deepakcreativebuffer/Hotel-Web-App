import React from "react";
import { QRWrappper } from "./QRStyle";
import logo from "../../../../../components/assets/icons/152x152.png";
import scan from "../../../../../components/assets/images/scan.png";
import { Button } from "@mui/material";
import scanIcon from "../../../../../components/assets/images/iconscan.png";
import {pagesMenu} from "../../../../../menu"
import { useNavigate } from "react-router-dom";



const QRScreen = () => {

const  navigate =  useNavigate();

const scanHandler =()=>{
  navigate(`../${pagesMenu.menu.path}`)
}
  return (
    <QRWrappper>
      <div className="logoWrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="content_box">
        <div>
        <img className="scan" src={scan} alt="Scaner" />
        </div>
        <p> Enable QR Code Scanning to</p>
        <p>Access the Hotel Menu</p>
        <Button onClick={scanHandler} > <img  src={scanIcon} alt='scan_icon'/> <p>Scan Now</p> </Button>        
      </div>
    </QRWrappper>
  );
};

export default QRScreen;
