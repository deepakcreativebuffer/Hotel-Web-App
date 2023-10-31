import React, { useState } from "react";
import { MenuWrappper } from "./contactStyle";
import logo from "../../../../../components/assets/icons/152x152.png";
import { useNavigate } from "react-router-dom";
import { pagesMenu } from "../../../../../menu";
import { Button } from "@mui/material";
import backIcon from "../../../../../components/assets/images/backicon.png"

const Contact = () => {
  const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState(`+91`);

  const trackOrderStatusHandler = () => {
    navigate(`../${pagesMenu.trackStatus.path}`);
  };

  const backHandler =()=>{
    navigate(-1);

  }

  return (
    <MenuWrappper>
      <div className="back_btn" >
        <img src={backIcon} alt="back" onClick={backHandler} />
      </div>
      <div className="logoWrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="content_box">
        <div className="text">
          <h3>Enter Phone Number</h3>
          <p>Please enter your phone number to access the menu</p>
        </div>
        <div className="inputs">
          <input type="tel" className="input1" value={countryCode}  /> <input type="number" className="input2" />
        </div>

        <Button onClick={trackOrderStatusHandler} >Continue</Button>
      </div>
    </MenuWrappper>
  );
};

export default Contact;
