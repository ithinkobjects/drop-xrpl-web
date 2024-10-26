import styled from "styled-components";


const SpanTxt = styled.span`
  color: white;
  text-align: center;
  display: block;
  margin: 0;
  padding: 0;

  ${({link}) => {
    return link ?
      `
        transition: all 0.3s ease;
        &:hover {
          text-decoration: none;
          color: rgb(235, 101, 205);
        }
      ` : null
  }}

  ${({huge, nav, medium}) => {
    if (huge) {
      return `
        font-size: 35px;
        @media (min-width: 769px) and (max-width: 1024px) {
          font-size: 55px;
        }
        @media (min-width: 1025px) {
          font-size: 100px;
        }
      `;
    } else if (nav) {
      return `
        font-size: 13px;
        @media (min-width: 769px) and (max-width: 1024px) {
          font-size: 14px;
        }
        @media (min-width: 1025px) {
          font-size: 16px;
        }
      `;
    } else if (medium) {
      return `
        font-size: 16px;
        text-align: left;
        @media (min-width: 769px) and (max-width: 1024px) {
          font-size: 20px;
        }
        @media (min-width: 1025px) {
          font-size: 25px;
        }
      `;
    } else {
      return null;
    }
  }}

`;


export default SpanTxt;