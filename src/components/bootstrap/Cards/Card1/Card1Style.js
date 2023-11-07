import { Box, styled } from '@mui/material';

export const CardWrappper = styled(Box)`
  padding: 8px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-top: 10px;

  .link {
    text-decoration: none;
    color: #000;
    display: flex;
    align-items: center;

    .foodimg {
      width: 80px;
      min-width: 80px;
      height: 80px;
      background: #ffefdb;
      border: #ffc276 solid thin;
      border-radius: 100px;
      margin-right: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        width: 50px;
      }
    }
    .foodcontent {
      line-height: 18px;
      h6 {
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 0px;
      }

      .smlltxt {
        font-size: 12px;
        line-height: 12px;
      }
    }
  }

  @media (max-width: 768px) {
  }
`;
