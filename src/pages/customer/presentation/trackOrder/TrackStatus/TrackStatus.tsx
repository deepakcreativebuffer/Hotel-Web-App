import React, { useState } from 'react';
import { TrackOrderWrappper } from "./trackStatusStyle";
import { useNavigate } from "react-router-dom";
import { pagesMenu } from "../../../../../menu";
import backIcon from "../../../../../components/assets/images/backicon.png";
import homeIcon from "../../../../../components/assets/images/homeicon.png";
import hashIcon from "../../../../../components/assets/images/hashicon.png";
import timeIcon from "../../../../../components/assets/images/timeicon.png";
import placeGreen  from "../../../../../components/assets/images/place-green.png";
import cartGreen  from "../../../../../components/assets/images/cart-green.png";
import preparedBlack  from "../../../../../components/assets/images/prepared-black.png";
import serveBlack  from "../../../../../components/assets/images/serve-black.png";
import { Button } from "@mui/material";
import DialogBox from "../../../../../components/bootstrap/DialogBox";

const TrackStatus = () => {
  const navigate = useNavigate();

  const trackOrderStatusHandler = () => {
    navigate(`../${pagesMenu.trackStatus.path}`);
  };



  const [isCancelConfirmationOpen, setIsCancelConfirmationOpen] = useState(false);

  const openCancelConfirmation = () => {
    setIsCancelConfirmationOpen(true);
  };

  const closeCancelConfirmation = () => {
    setIsCancelConfirmationOpen(false);
  };

  const confirmCancelOrder = () => {
    // Handle the order cancellation logic here
    // You can make an API request or update the order status in your state.
    // After that, close the confirmation dialog.
    closeCancelConfirmation();
  };

  const backHandler = () => {
    navigate(-1);
  };

  return (
    <TrackOrderWrappper>
      <div className="header">
        <img src={backIcon} alt="back" onClick={backHandler} />
        <p>Order Tracking</p>
        <img src={homeIcon} alt="back" onClick={backHandler} />
      </div>

      <div className="content_box">
        <div className="card_header">
          <div className="card_content">
            <img src={timeIcon} alt="timeIcon" />
            <div>
              <p>Estimated Time</p>
              <p>15 Minutes</p>
            </div>
          </div>
          <div className="card_content">
            <img src={hashIcon} alt="orderIcon" />
            <div>
              <p>Order no.</p>
              <p>516</p>
            </div>
          </div>
        </div>
        <div className="tracklist">
          <ul>
            <li className="active">
              <div className="orderflex active">
                <div className="icon">
                  <img src={placeGreen} alt='icon'/>
                </div>
                <div className="ordercontent ">
                  <h5>Order Placed</h5>
                  <span>We have received your order.</span>
                </div>
              </div>
            </li>
            <li className="active">
              <div className="orderflex active">
                <div className="icon">
                  <img src={cartGreen} alt='icon'/>
                </div>
                <div className="ordercontent ">
                  <h5>Order Confirmed</h5>
                  <span>Your order has been confirmed.</span>
                </div>
              </div>
            </li>

            <li className="">
              <div className="orderflex">
                <div className="icon">
                  <img src={preparedBlack} alt='icon'/>
                </div>
                <div className="ordercontent">
                  <h5>Order Prepared</h5>
                  <span>We are preparing your order.</span>
                </div>
              </div>
            </li>

            <li className="">
              <div className="orderflex">
                <div className="icon">
                  <img src={serveBlack} alt='icon'/>
                </div>
                <div className="ordercontent">
                  <h5>Ready to Serve</h5>
                  <span>Your order is ready to serve.</span>
                </div>
              </div>
            </li>
        
          </ul>
        </div>
        <Button  variant='outlined'  onClick={openCancelConfirmation}>Cancel Order</Button>
      </div>
      <DialogBox
        open={isCancelConfirmationOpen}
        onClose={closeCancelConfirmation}
        onConfirm={confirmCancelOrder}
      />
    </TrackOrderWrappper>
  );
};

export default TrackStatus;
