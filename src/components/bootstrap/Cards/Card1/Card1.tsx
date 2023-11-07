import React from 'react';
import { Link } from 'react-router-dom';
import { CardWrappper } from './Card1Style';
import offerIcon from '../../../assets/images/discount.png';

const Card1 = () => {
  return (
    <CardWrappper>
      <div className="offerzone">
        <Link to="/dasboard" className="link">
          <div className="foodimg">
            <img src={offerIcon} alt="foodImg" />
          </div>
          <div className="foodcontent">
            <h6>Discount & Offer Zone</h6>
            <span className="smlltxt">
              Nullam nec laoreet ligula. Integer pulvinar
            </span>
          </div>
        </Link>
      </div>
    </CardWrappper>
  );
};

export default Card1;
