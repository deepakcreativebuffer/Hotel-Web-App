import { Box, styled } from "@mui/material";

export const DashboardWrappper = styled(Box)`

  @media (max-width: 768px) {
    
    .transition-class {
        transition: margin-left 1s ease; 
      }
      .transition-class-right {
        transition: margin-right 1s ease; 
      }
      height:100vh;

      .header{
        display: flex;
        flex-direction: row;
        justify-content: start;
        align-items: center;

        .closebtn{
            height:3vh;
            width:6vw;
            margin-left:10px;
        }
  

      
  }
`;
