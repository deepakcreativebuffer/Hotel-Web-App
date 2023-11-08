import { Box, styled } from '@mui/material';

export const DashboardWrappper = styled(Box)`
  @media (max-width: 768px) {
    .transition-class {
      transition: margin-left 1s ease;
    }
    .transition-class-right {
      transition: margin-right 1s ease;
    }

    .chatfixed {
      background: #fff;
      box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      display: -webkit-flex;
      -webkit-align-items: center;
      -webkit-justify-content: center;
      position: fixed;
      bottom: 90px;
      right: 10px;
      border-radius: 100px;
      z-index: 99;

      .chat {
        background: transparent;
        border: none;
        outline: none;
        img {
          width: 24px;
        }
      }
    }

    .header {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      .nav_close {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: start;
        width: 100%;
        .closebtn {
          height: 2.5vh;
          width: 6vw;
          margin: 4px 0px 0px 10px;
        }
      }

      .search_row {
        width: 100%;
        padding: 10px;
        input {
          width: 100%;
          height: 4vh;
          border-radius: 50px;
          border: none;
        }
      }

      .table_row {
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: space-between;
        margin-top: 5px;
        color: white;
        margin-bottom: 15px;
        img {
          width: 4vw;
          height: 1.5vh;
          margin-right: 10px;
        }
        .table_no {
          display: flex;
          flex-direction: row;
          justify-content: space-evenly;
          margin-left: 20px;
          align-items: center;

          background: transparent;
          outline: none;
          border: none;
          color: #9e9efd;
          font-size: 12px;
          p {
            margin: 0;
          }
          .number {
            border: #9e9efd solid thin;
            color: #fff;
            padding: 2px 5px;
            display: inline-block;
          }
        }
      }
    }
    .content_body {
      background: white;
      height: 100vh;
      width: 100vw;
      border-radius: 30px 30px 0px 0px;

      .offerSection {
        padding: 15px;
      }
      .section {
        .title {
          font-weight: 600;
          font-size: 16px;
          text-align: start;
          padding-left: 10px;
        }
        .dishlist {
          padding: 10px 0px;
          .custom-carousel {
            .slide {
              width: 80%;
            }
          }
        }
        .trusted {
          padding-right: 10px;
          margin-top: 10px;
        }
      }
      .alldishes {
        padding-right: 22px;
        .filterheading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 12px;

          .title {
            font-weight: 600;
            font-size: 16px;
            padding-left: 10px;
          }
          .toglefilter {
            display: flex;
            align-items: center;
            font-size: 12px;
          }
        }
      }
    }
  }
`;
