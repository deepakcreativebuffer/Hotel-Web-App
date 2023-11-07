import React from 'react';
import { CardWrappper } from './Card3Style';
import { Link } from 'react-router-dom';
import calendar from '../../../assets/images/calendar.png';
import img1 from '../../../assets/images/img1.png';

const Card3 = () => {
  return (
    <CardWrappper>
      <div className="foodbox">
        <div className="foodimg">
          <img src={img1} alt="" />
          <div className="foodstatus">
            <span className="veg"></span>
          </div>
        </div>
        <div className="foodcont">
          <h6>Caldo's Cafe &amp; Lounge</h6>
          <span className="paidstatus">Paid</span>
          <div className="indicate">
            <div className="price">$10</div>
            {/* <!-- <span className="status delivered">Delivered</span> --> */}
          </div>
        </div>
      </div>

      <div className="flexdate">
        <div className="dates">
          <img src={calendar} alt="calendar" />
          <span>29 Sep 2023 at 9:44 AM</span>
        </div>
      </div>

      <div className="flexdate">
        <div className="feedback">
          <Link type="button" className="rating" to="/">
            Reorder
          </Link>
        </div>
        <div className="feedback">
          <button
            type="button"
            className="rating"
            data-bs-toggle="modal"
            data-bs-target="#ratingmodal"
          >
            Give Feedback
          </button>
        </div>
      </div>
    </CardWrappper>
  );
};

export default Card3;
