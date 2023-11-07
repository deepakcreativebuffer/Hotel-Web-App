import { Box, styled } from '@mui/material';

export const CardWrappper = styled(Box)`
  display: inline-block;
  width: 30.8%;
  margin-right: 8px;
  margin-bottom: 10px;

  .link {
    color: #000;
    text-decoration: none;

    .pickcont {
      position: relative;
      .pickitem {
        height: 100px;
        overflow: hidden;
        border-radius: 5px;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }
      .offerbox {
        position: absolute;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.7);
        padding: 5px;
        border-radius: 0px 0px 5px 5px;

        .titleoff {
          font-size: 16px;
          font-weight: 600;
          color: #fff;
          line-height: 16px;
        }
        .suboff {
          color: #fff;
          font-size: 10px;
        }
      }
    }

    .titleitem {
      font-size: 14px;
      font-weight: 600;
      white-space: nowrap;
      text-overflow: ellipsis;
      width: 90px;
      overflow: hidden;
    }

    .star {
      margin-right: 10px;
      line-height: 0;

      i.checked {
        color: #f6ae24;
      }
    }
  }

  @media (max-width: 768px) {
  }
`;
