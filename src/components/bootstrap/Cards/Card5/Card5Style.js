import { Box, styled } from '@mui/material';

export const CardWrappper = styled(Box)`
  padding: 8px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 15px;

  .foodbox {
    display: flex;
    .foodimg {
      flex: 1;
      flex-shrink: 1;
      overflow: hidden;
      height: 90px;
      border-radius: 5px;
      margin-right: 15px;
      position: relative;
      .link {
        color: #0d6efd;
        text-decoration: underline;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
        }
        .foodstatus {
          width: 16px;
          height: 16px;
          background: #fff;
          border-radius: 2px;
          position: absolute;
          bottom: 6px;
          right: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          display: flex;
          align-items: center;
          justify-content: center;
          .veg {
            background: #1c6d14;
            border-radius: 100px;
            width: 8px;
            height: 8px;
            display: block;
          }
        }
      }
    }
    .foodcont {
      flex: 2;
      flex-shrink: 0;
      .link {
        text-decoration: none;
        color: #1b1b1b;
        h6 {
          font-size: 14px;
          margin-bottom: 0px;
          font-weight: 600;
          margin-top: 10px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 170px;
          text-align:start;
        }

        .smlltxt {
          font-size: 10px;
          display: block;
          color: #1b1b1b;
          line-height: normal;
          text-align:start;
        }
      }
    }

    .indicate {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;

      .flexrating {
        display: flex;
        align-items: center;
        .star {
          margin-right: 10px;
          line-height: 0;
        }
        .price {
          font-weight: 600;
          font-size: 14px;
        }
      }

      .cartquantity{
        .counter {
            width: auto;
            margin: auto;
            display: flex;
            align-items: center;
            justify-content: center;

            .down{
                display: block;
                font-size: 18px;
                padding: 0px 8px;
                cursor: pointer;
                border-radius: 5px;
                background:#07076d;
                color: white;
                user-select: none;
            }
            input {
                width: 35px;
                border: 0;
                line-height: 35px;
                font-size: 16px;
                text-align: center;
                background: transparent;
                color: #1b1b1b;
                appearance: none;
                outline: 0;
            }

            .up{
                display: block;
                font-size: 18px;
                padding: 0px 8px;
                cursor: pointer;
                border-radius: 5px;
                background: #07076d;
                color: white;
                user-select: none;
        }
      }
    }
  }

  @media (max-width: 768px) {
  }
`;
