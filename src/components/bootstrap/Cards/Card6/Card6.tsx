import React from 'react';
import { CardWrappper } from './Card6Style';
import wavecoffe from '../../../assets/images/wavecoffe.jpg';
import { Link } from 'react-router-dom';

const Card6 = () => {
  return (
    <CardWrappper>
      <Link to="itemlists" className="link">
        <div className="pickcont">
          <div className="pickitem">
            <img src={wavecoffe} alt="foodimg" />
          </div>
          <div className="offerbox">
            <div className="titleoff">20% Off</div>
            <div className="suboff">Upto $50</div>
          </div>
        </div>
        <div className="titleitem">Third wave coffee</div>
        <div className="star">
          <i className="fas fa-star checked"></i>
          <i className="fas fa-star checked"></i>
          <i className="fas fa-star checked"></i>
          <i className="fas fa-star checked"></i>
          <i className="fas fa-star checked"></i>
        </div>
      </Link>
    </CardWrappper>
  );
};

export default Card6;
