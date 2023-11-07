import React from 'react';
import { CardWrappper } from './Card4Style';
import cat1 from '../../../assets/images/cat1.png';

const Card4 = () => {
  return (
    <CardWrappper>
      <div className="catimg">
        <img src={cat1} alt="" />
      </div>
      <div className="flexheading">
        <h3 className="title">Best in Non Veg</h3>
        <span className="counts">15</span>
      </div>
    </CardWrappper>
  );
};

export default Card4;
