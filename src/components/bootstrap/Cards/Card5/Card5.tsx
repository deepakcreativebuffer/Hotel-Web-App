import React from 'react';
import { CardWrappper } from './Card5Style';
import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/img1.png';

const Card5 = () => {
  return (
    <CardWrappper>
      <div className="foodbox">
        <div className="foodimg">
          <Link to="/" className="link">
            <img src={img1} alt="img1" />
            <div className="foodstatus">
              <span className="veg"></span>
            </div>
          </Link>
        </div>
        <div className="foodcont">
          <Link to="/" className="link">
            <h6>Caldo's Cafe &amp; Lounge</h6>
            <span className="smlltxt">
              Nullam nec laoreet ligula. Integer pulvinar
            </span>
          </Link>
          <div className="indicate">
            <div className="flexrating">
              <div className="star">
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
                <i className="fas fa-star checked"></i>
              </div>
              <div className="price">$10</div>
            </div>
            <div className="cartquantity">
              <div className="counter">
                <span className="down">-</span>
                <input type="text" value="1" id="quantity" />
                <span className="up">+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CardWrappper>
  );
};

export default Card5;
