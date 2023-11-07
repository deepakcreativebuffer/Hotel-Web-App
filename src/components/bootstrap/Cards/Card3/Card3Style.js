import { Box, styled } from '@mui/material';

export const CardWrappper = styled(Box)`
  padding: 8px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 15px;
  background: #ffd3c6;

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
    }
    .foodcont {
      flex: 2;
      flex-shrink: 0;
      text-align: start;
      h6 {
        font-size: 14px;
        margin-bottom: 0px;
        font-weight: 600;
        margin-top: 10px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 170px;
      }
      .paidstatus {
        font-size: 10px;
        display: inline-block;
        background: #d6ebe2;
        border: #1c6d14 solid thin;
        color: #1c6d14;
        line-height: normal;
        padding: 2px 6px;
        border-radius: 4px;
      }
      .indicate {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 10px;
        .price {
          font-weight: 600;
          font-size: 14px;
        }
      }
    }
  }
  .flexdate {
    padding-top: 10px;
    margin-top: 10px;
    border-top: rgba(0, 0, 0, 0.1) solid thin;
    display: flex;
    align-items: center;
    display: flex;
    align-items: center;
    gap: 10px;
    .dates {
      flex: 1.5;
      display: flex;

      img {
        margin-right: 10px;
        width: 20px;
      }
      span {
        font-size: 12px;
        color: #727272;
      }
    }

    .feedback {
      flex: 1;

      .rating {
        border: #07076d solid thin;
        color: #07076d;
        background: #fff;
        border-radius: 5px;
        padding: 4px 5px;
        display: block;
        font-size: var(--size12);
        text-decoration: none;
        text-align: center;
        width: 100%;
        text-decoration: none;
        display: block;
      }
    }
  }

  . @media (max-width: 768px) {
  }
`;
