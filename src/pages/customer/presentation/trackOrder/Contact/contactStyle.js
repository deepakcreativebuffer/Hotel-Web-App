import { Box, styled } from "@mui/material";

export const MenuWrappper = styled(Box)`
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    background-color: #07076d;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0;
    padding: 0;

    .back_btn {
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 15px;
      margin-left: 15px;
      img {
        height: 15px;
        width: 20px;
      }
    }

    .logoWrapper {
      padding: 60px 0px 60px 0px;
    }

    .content_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 10px;

      .text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: baseline;
        color: white;
      }
      .inputs {
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        width: 100%;
        padding-left: 20px;

        .input1 {
          background-color: #07076d;
          width: 15%;
          margin-right: 10px;
          border-bottom: 1px solid white;
          border-top: 0px;
          border-left: 0px;
          border-right: 0px;
          color: white;
          &:focus {
            border-bottom: 1px solid white;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            outline: none;
            color: white;
          }
        }

        .input2 {
          background-color: #07076d;
          width: 100%;
          margin-right: 10px;
          border-bottom: 1px solid white;
          border-top: 0px;
          border-left: 0px;
          border-right: 0px;
          color: white;
          &:focus {
            border-bottom: 1px solid white;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
            outline: none;
            color: white;
          }
        }
      }

      .MuiButtonBase-root {
        margin: 25px 15px 15px 15px;
        background-color: white;
        color: #07076d;
        width: 90vw;
        height: 50px;
        border-radius: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;
