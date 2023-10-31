import { Box, styled } from "@mui/material";

export const SplashWrappper = styled(Box)`
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    background-color: #07076d;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;

    .pageWrapper {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100vw;
      overflow: hidden; /* Add this to prevent content overflow */
    }

    .splash_footer {
      padding: 0;
      margin: 0;
      h6 {
        color: blue;
      }
      h4 {
        color: white;
      }
    }
  }
`;
