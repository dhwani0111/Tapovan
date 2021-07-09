import { Link } from "react-router-dom";
import styled from "styled-components";

export const EventSection = styled.div`
  margin : 0px;
  padding: 0;
  background: #f5f5f5;
  box-shadow: 0px 0px 35px rgba(165, 166, 170, 0.22);
  border-radius: 9px;
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    display: flex;
  }
`;
 

export const Heading = styled.h1`
  color: black;
  margin: 10px auto;
  font-size: 28px;
`;
export const ImageBody = styled.div`
  margin: 0 auto;
  padding: 10px 100px 50px;
  justify-content: center;
  z-index: 1;
  @media screen and (max-width: 649px) {
    margin: 0 auto;
    padding: 10px;
    width: 100%;
    display: flex;
  }
`;
export const CardBody = styled.div`
  // margin: 400px;
  width : 70rem;
  margin : 0 auto;
  padding: 100px;
  justify-content: center;
  z-index: 1;
  @media (min-width:650px) and (max-width: 1024px) {
     width: 100%;
  }
  @media screen and (max-width: 600px) {
    margin: 0 auto;
    display: flex;
    padding : 10px;
    flex-direction: column;
    align-items: center;
    // width: 100%;
  }
`;
// export const ImageCarousel = styled.div`
//   background : red;
// `;
