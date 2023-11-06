import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { navAction } from "../../../../store/Slices/NavbarSlice";
import { DashboardWrappper } from "./DashboardStyle";
import closeBtn from "../../../../components/assets/images/close.png";
import KartBag from "../../../../components/assets/images/bag.png";

const DashboardPage = ({ show }: any) => {
  const visible: boolean = useSelector((state: any) => state.nav.show);
  const dispatch = useDispatch();
  const payload = {
    show: !visible,
  };

  return (
    <DashboardWrappper>
      <div
        className={
          visible === true ? "transition-class" : "transition-class-right"
        }
        style={{
          backgroundColor: "grey",
          height: "auto",
          width: "100vw",
          marginLeft: visible === true ? "70vw" : "",
        }}
      >
        {/* <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => show(true)}>
          <FaBars size={24} />
        </button>
      </div> */}
    
        <div className="header">

        {
         visible === true ?  <img
         className="closebtn"
         src={closeBtn}
         alt="close"
         onClick={() => dispatch(navAction(payload))}
       /> :''
      }
          
        </div>
      </div>
    </DashboardWrappper>
  );
};

export default DashboardPage;
