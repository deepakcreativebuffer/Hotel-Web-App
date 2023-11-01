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

    .logoWrapper {
      padding: 60px 0px 60px 0px;
    }

    .content_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .menuItem {
        height: 6vh;
        border-radius: 10px;
        width: 90vw;
        background-color: white;
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;
        .icon {
        
            width: 13vw;
            padding: 8px;      
            background-color: #07076d;
            border-radius: 13px;
            margin: 0px 5px 0px 5px;
          img {
            height: 30px;
            width: 25px;
          }
        }
        p{
            margin:0;
            font-weight: 700;
            margin: 0px 10px 0px 10px;
        }
      }
      div:nth-child(4) {
        height: 8vh;
        background-color: #07076d;
        margin-top: 60px;
        border: dotted white;
        color: #ffffff;
        display: flex;
        flex-direction: row;
        justify-content:center;
        align-items: center;
        .icon{
            margin: 0
        }

        
      }
    
    }
  }
`;
