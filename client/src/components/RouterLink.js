import styled from "styled-components";
import { Link } from "react-router-dom";


const RouterLink = styled(Link)`
  text-decoration: none; 
  color: inherit;
  cursor: pointer;
  color: white;
  font-family: inherit;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: none;
    color: rgb(235, 101, 205);
  }
  
  margin: 0px 13px 0px 0px;

  @media (min-width: 769px) and (max-width: 1024px) {
    margin: 0px 16px 0px 0px;
  }
  @media (min-width: 1025px) {
    margin: 0px 19px 0px 0px;
  }
  
`;


export default RouterLink;
