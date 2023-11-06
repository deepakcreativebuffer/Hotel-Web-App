import { Box, styled } from "@mui/material";

export const NavBarWrappper = styled(Box)`
  nav {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 15%;
    min-height: 100vh;
    background-color: #07076d;
    padding: 2rem 1rem 1rem 1rem;
    transition: transform 1s;

    .nav-btn {
      position: absolute;
      transform: translateX(38px);
      top: 20px;
      right: 0;
      width: 40px;
      height: 60px;
      border-top-right-radius: 5px;
      border-bottom-right-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #07076d;
      outline: none;
      border: none;
      font-size: 1rem;
      padding: 5px 10px;
      cursor: pointer;
      color: #fff;
    }
    .logo {
      display: block;
      width: 100px;
      margin: auto;
      background: transparent;
    }

    .logo img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: #fff;
      text-decoration: none;
      padding: 10px 1rem;
      border-radius: 5px;
      margin-bottom: 5px;
    }

    .nav-link:hover {
      background-color: #afb4ff;
      color: #4e4e4e;
    }
    .nav-link span {
      margin-left: 10px;
    }
    .Reward {
      margin-top: 2rem;
      p {
        font-size: 13px;
        color: #fba919;
      }
      h4 {
        color: white;
      }
    }
    .nav-top {
      margin-top: 2rem;
      border-top: 1px solid white;
      padding: 10px 15px 0px 15px;
    }
  }

  .navbar {
    transform: translateX(-100%);
  }

  .mobile-nav {
    background-color: #07076d;
    width: 100%;
    height: 50px;
    display: none;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    color: white;
    p {
      margin: 0;
    }
    div {
      background-color: white;
      height: 30px;
      margin-right: 15px;
      height: 4vh;
      width: 9vw;
      border-radius: 50px;
      .kartbtn {
        height: 2.5vh;
        width: 6.5vw;
        margin-top: 7px;
      }
    }

    .mobile-nav-btn {
      color: #fff;
      background: transparent;
      outline: none;
      border: none;
      margin: 0 10px;
    }
  }
  .nav_footer {
    padding: 0;
    margin: 0;
    h6 {
      color: blue;
    }
    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    nav {
      width: 40%;
      padding: 0px;
    }
  }

  @media only screen and (max-width: 450px) {
    .mobile-nav {
      display: flex;
      align-items: center;
    }
    nav {
      width: 70%;
      top: 38px;
      min-height: calc(100vh - 38px);
    }

    .nav-btn {
      display: none;
    }
  }
`;
