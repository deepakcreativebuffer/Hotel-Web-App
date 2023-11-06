import React from "react";
import { NavBarWrappper } from "./NavbarStyle";
import { NavLink } from "react-router-dom";
import { navAction } from "../../store/Slices/NavbarSlice";
import { useDispatch, useSelector } from 'react-redux';
import {
  FaAngleRight,
  FaAngleLeft,
  FaChartBar,
  FaThLarge,
  FaShoppingCart,
  FaCog,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
const ICON_SIZE = 20;


const Navbar = () => {
    const visible:boolean = useSelector((state:any) => state.nav.show)
    // console.log(visible.)
    const dispatch = useDispatch()
    const payload={
        show:!visible
    }
  return (
    <NavBarWrappper>
      <div className="mobile-nav">
        <button className="mobile-nav-btn" onClick={() => dispatch(navAction(payload))}>
          <FaBars size={24} />
        </button>
      </div>
      <nav className={!visible ? "navbar" : ""}>
        {/* <button
          type="button"
          className="nav-btn"
          onClick={() => show(!visible)}
        >
          {!visible ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
        </button> */}
        <div>
          <NavLink className="logo" to="/">
            <img src={require("../assets/icons/152x152.png")} alt="logo" />
          </NavLink>
          <div className="links nav-top">
            <NavLink to="/dashboard" className="nav-link">
              <FaThLarge size={ICON_SIZE} />
              <span>Dashboard</span>
            </NavLink>
            <NavLink to="/analytics" className="nav-link">
              <FaChartBar size={ICON_SIZE} />
              <span>Analytics </span>
            </NavLink>
            <NavLink to="/menu" className="nav-link">
              <FaShoppingCart size={ICON_SIZE} />
              <span>Orders</span>
            </NavLink>
          </div>
        </div>

        <div className="links">
          <NavLink to="/settings" className="nav-link">
            <FaCog size={ICON_SIZE} />
            <span>Settings</span>
          </NavLink>
          <NavLink to="/Sign-out" className="nav-link">
            <FaSignOutAlt size={ICON_SIZE} />
            <span>Logout</span>
          </NavLink>
        </div>
      </nav>
    </NavBarWrappper>
  );
};

export default Navbar;
