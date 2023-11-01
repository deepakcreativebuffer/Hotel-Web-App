import { Box, styled } from "@mui/material";

export const TrackOrderWrappper = styled(Box)`
  @media (max-width: 768px) {
    height: 100vh;
    width: 100vw;
    background-color: #07076d;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin: 0;
    padding: 0;

    .header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 15px;
      p {
        color: white;
        font-weight: 500;
      }
      img:nth-child(1) {
        height: 15px;
        width: 20px;
        margin-left: 20px;
      }
      img:last-child {
        height: 20px;
        width: 20px;
        margin-right: 20px;
      }
    }

    .content_box {
      display: flex;
      flex-direction: column;
      justify-content: start;
      align-items: center;
      margin-top: 10px;
      height: 100vh;
      width: 100vw;
      background-color: white;
      border-top-left-radius: 30px;
      border-top-right-radius: 30px;

      .card_header {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        img {
          color: black;
          height: 15px;
          width: 15px;
          margin:5px  10px 0px 0px;
        }

        .card_content {
          display: flex;
          flex-direction: row;
          justify-content: end;
          align-items: baseline;
          margin-top: 20px;

          div {
            line-height: 6px;
            text-align: justify;
            font-weight:500;
          }
        }
      }

      .tracklist {
        padding: 30px 0px 0px 0px;
        margin: 30px 0px 0px 0px;
        border-top: #ccc solid thin;
        width: 90vw;

        ul {
          li {
            list-style: none;
            display: block;
            position: relative;
            padding-bottom: 40px;
            padding-left: 40px;
            z-index: 1;

            &.active::before {
              border: #1c6d14 solid 5px;
            }

            &::before {
              content: "";
              display: block;
              position: absolute;
              left: 0;
              top: 14px;
              background: #c8c8c8;
              width: 18px;
              height: 18px;
              border-radius: 50px;
              transform: translate(0px, 0px);
            }
            &:not(:last-child)::after {
              content: "";
              display: block;
              position: absolute;
              left: 8px;
              top: 14px;
              background: #c8c8c8;
              width: 1px;
              height: 100%;
              z-index: -1;
            }
        
            &.active::after {
              background: #1c6d14;
            }
         
         


            .orderflex {
              flex-direction: row;
              display: flex;
              align-items: center;
              display: -webkit-flex;
              -webkit-align-items: center;

              &.active{

                h5{
                  color:#1c6d14;
                }
              }

              .icon {
                flex: 1;
                img {
                  width: 25px;
                }
              }
              .ordercontent {
                flex: 5;
                text-align: start;
                line-height: 8px;

                h4 {
                  font-size: calc(1.275rem + 0.3vw);
                }
              }
            }
          }
        }
      }

      .MuiButtonBase-root {
        margin: 0px 15px 0px 15px;
        color: #07076d;
        border:1px solid #07076d;
        width: 90vw;
        height: 50px;
        border-radius: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-weight:600;
      }
    }
  }
`;
