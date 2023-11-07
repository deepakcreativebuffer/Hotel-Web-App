import { Box, styled } from '@mui/material';

export const CardWrappper = styled(Box)`
  padding: 8px;
  box-shadow: 0 5px 12px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 15px;

  .catimg {
    height: 150px;
    overflow: hidden;
    border-radius: 5px 5px 0px 0px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
  }
  .flexheading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 6px 12px;

    .title {
      font-size: 14px;
      margin-bottom: 0px;
      font-weight: 600;
      color: #1b1b1b;
    }
    .counts {
      padding: 3px 8px;
      background: #07076d;
      display: inline-block;
      border-radius: 100px;
      font-size: 12px;
      color: #fff;
    }
  }

  @media (max-width: 768px) {
  }
`;
