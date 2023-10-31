import { Box, styled } from "@mui/material";

export const QRWrappper = styled(Box)`
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    background-color: #07076d;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin: 0;
    padding: 0;

    .content_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: white;
      margin: 0px 20px 0px 20px;
      padding: 70px 30px 70px 30px;
      border-radius: 10px;

      .scan {
        height: 100px;
        width: 100px;
        margin-bottom: 30px;
      }

      p {
        margin: 0;
        font-weight: 500;
      }
      p:nth-child(3) {
        color: #07076d;
      }
      .MuiButtonBase-root {
        margin: 15px;
        background-color: black;
        color: white;
        width: 80vw;
        height: 50px;
        border-radius: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
          height: 15px;
          width: 15px;
          margin: 0px 5px 0px 5px;
        }
      }
    }
  }
`;
