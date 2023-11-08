import React, { useState } from 'react';
import { FaBars, FaAngleLeft } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { navAction } from '../../../../store/Slices/NavbarSlice';
import { DashboardWrappper } from './DashboardStyle';
import closeBtn from '../../../../components/assets/images/close.png';
import menuBtn from '../../../../components/assets/images/menu.png';
import chatIcon from '../../../../components/assets/images/chaticon.png';
import tableIcon from '../../../../components/assets/images/table.png';
import Card1 from '../../../../components/bootstrap/Cards/Card1/Card1';
import Card2 from '../../../../components/bootstrap/Cards/Card2/Card2';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Card3 from '../../../../components/bootstrap/Cards/Card3/Card3';
import Card4 from '../../../../components/bootstrap/Cards/Card4/Card4';
import Card5 from '../../../../components/bootstrap/Cards/Card5/Card5';
import Card6 from '../../../../components/bootstrap/Cards/Card6/Card6';
import { Link } from 'react-router-dom';

const DashboardPage = ({ show }: any) => {
  const visible: boolean = useSelector((state: any) => state.nav.show);
  const dispatch = useDispatch();
  const payload = {
    show: !visible,
  };

  return (
    <DashboardWrappper>
      <div
        className={` ${
          visible === true ? 'transition-class' : 'transition-class-right'
        }`}
        style={{
          backgroundColor: ' #07076d',
          height: 'auto',
          width: '100vw',
          marginLeft: visible === true ? '70vw' : '',
        }}
      >
        <div className="header">
          {visible === true ? (
            <div className="nav_close">
              <img
                className="closebtn"
                src={closeBtn}
                alt="close"
                onClick={() => dispatch(navAction(payload))}
              />
            </div>
          ) : (
            ''
          )}
          <div className="search_row">
            <input type="search" />
          </div>
          <div className="table_row">
            <div className="table_no">
              <img src={tableIcon} alt="tableIcon" />
              <p>Table No.</p>
              <p className="number">04</p>
            </div>
            <img src={menuBtn} alt="gridIcon" />
          </div>
        </div>
        <div className="content_body">
          <div className="offerSection">
            <div className="offerlistbox ">
              <Card1 />
            </div>
          </div>
          <div className="section">
            <div className="title">Recommended For You</div>
            <div className="dishlist">
              <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={1}
                showArrows={false}
                infiniteLoop={true}
                className="custom-carousel"
              >
                <Card2 />
                <Card2 />
              </Carousel>
            </div>
          </div>
          <div className="section">
            <div className="title">Your Previous Order</div>
            <div className="dishlist">
              <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={1}
                showArrows={false}
                infiniteLoop={true}
                className="custom-carousel"
              >
                <Card3 />
                <Card3 />
              </Carousel>
            </div>
          </div>
          <div className="section">
            <div className="title">Top Rated for You</div>
            <div className="trusted ">
              <Card6 />
              <Card6 />
              <Card6 />
              <Card6 />
              <Card6 />
              <Card6 />
            </div>
          </div>

          <div className="section">
            <div className="title">Top Categories</div>
            <div className="dishlist">
              <Carousel
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={1}
                showArrows={false}
                infiniteLoop={true}
                className="custom-carousel"
              >
                <Card4 />
                <Card4 />
              </Carousel>
            </div>
          </div>
          <div className="alldishes">
            <div className="filterheading">
              <div className="title">All Dishes</div>
              <div className="toglefilter">
                <div className="form-check form-switch me-2">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                  />
                  <label className="form-check-label">Veg</label>
                </div>
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckChecked"
                  />
                  <label className="form-check-label">Non Veg</label>
                </div>
              </div>
            </div>

            <div className="foodlistbox">
              <Card5 />
              <Card5 />
            </div>
          </div>
        </div>
      </div>
      <div className="chatfixed">
        <Link className="chat" to="/">
          <img src={chatIcon} alt="" />
        </Link>
      </div>
    </DashboardWrappper>
  );
};

export default DashboardPage;
