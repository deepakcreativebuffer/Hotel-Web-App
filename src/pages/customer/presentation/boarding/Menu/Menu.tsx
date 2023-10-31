import React from "react";
import { MenuWrappper } from "./menuStyle";
import logo from "../../../../../components/assets/icons/152x152.png";
import foodIcon from "../../../../../components/assets/images/foodicon.png"
import drinkIcon from "../../../../../components/assets/images/drinkicon.png"
import desertIcon from "../../../../../components/assets/images/deserticon.png"
import trackIcon from "../../../../../components/assets/images/trackicon.png"
import { useNavigate } from "react-router-dom";
import { pagesMenu } from "../../../../../menu";
const Menu = () => {
const navigate = useNavigate();
const trackOrderHandler =()=>{
    navigate(`../${pagesMenu.contact.path}`)
}

  return (
    <MenuWrappper>
      <div className="logoWrapper">
        <img src={logo} alt="logo" />
      </div>
      <div className="content_box">
        <div className="menuItem">
            <div className="icon">
                <img src={foodIcon} alt='icon' />
             </div>
            <p>Food Menu</p>
        </div>
        <div className="menuItem">
        <div className="icon" >
            <img src={drinkIcon} alt='icon' />
             </div>
            <p>Drinks Menu</p>
        </div>
        <div className="menuItem">
        <div className="icon">
            <img src={desertIcon} alt='icon' /> 
            </div>
            <p>Desert Menu</p>
        </div>
        <div className="menuItem track" onClick={trackOrderHandler}>
        <div className="icon" >
            <img src={trackIcon} alt='icon' />
             </div>
            <h5>Track Your Order</h5>
        </div>
      </div>
      
    </MenuWrappper>
  );
};

export default Menu;
