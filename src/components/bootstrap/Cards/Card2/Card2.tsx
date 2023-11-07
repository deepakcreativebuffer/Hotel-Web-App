import React, { useState } from 'react';
import { CardWrappper } from './Cart2Style';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/img1.png';
import cart2 from '../../../assets/images/cart2.png';

const Card2 = () => {
  return (
    <CardWrappper>
      <div className="foodbox">
        <div className="foodimg">
          <Link to="/">
            <img src={img1} alt="food" />
            <div className="foodstatus">
              <span className="veg"></span>
            </div>
          </Link>
        </div>
        <div className="foodcont">
          <Link className="link" to="/">
            <h6>Caldo's Cafe &amp; Lounge</h6>
            <span className="smlltxt">
              Nullam nec laoreet ligula. Integer pulvinar
            </span>
          </Link>
          <div className="flexrating">
            <div className="star"></div>
            <div className="price">$10</div>
          </div>
        </div>
      </div>
      <div className="indicate">
        <div className="cartquantity">
          <Link to="/" className="status">
            <img src={cart2} alt="food" />
            Add To Cart
          </Link>
        </div>
        <div className="btnplay">
          <Link
            className="popup-youtube playbtn"
            to="https://www.youtube.com/embed/zhI7bQyTmHw?si=GrK62MVPuHNKsiwS"
          >
            <i className="fa fa-play"></i>
          </Link>
        </div>
      </div>
    </CardWrappper>
  );
};

export default Card2;
