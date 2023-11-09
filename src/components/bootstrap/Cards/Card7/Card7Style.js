import { Box, styled } from '@mui/material';

export const CardWrappper = styled(Box)`
  padding: 8px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 15px;
  width: 80%;

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

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
      }
    }

    .foodcont {
      flex: 2;
      flex-shrink: 0;

      .link {
        text-decoration: none;
        display: block;
        color: #1b1b1b;

        h6 {
          font-size: 14px;
          margin-bottom: 0px;
          font-weight: 600;
          margin-top: 5px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
          width: 170px;
          text-align: justify;
        }
      }

      .flexrating {
        display: flex;
        align-items: center;
        display: -webkit-flex;
        -webkit-align-items: center;

        .star {
          margin-right: 10px;
          line-height: 0;
        }
      }
    }
  }

  .indicate {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 0px;

    .cartquantity {
      .status {
        color: white;
        font-size: 10px;
        background: #07076d;
        border-radius: 100px;
        padding: 4px 8px;
        border: none;
        text-decoration: none;
        img {
          width: 12px;
          margin-right: 6px;
          padding-top: 8px;
        }
      }
    }

    .playbtn {
      text-decoration: none;
      display: block;
      .fa {
        font-weight: 900;
      }
    }
  }

  @media (max-width: 768px) {
  }
`;
