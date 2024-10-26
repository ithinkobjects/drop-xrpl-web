import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DivFlexCenter from './DivFlexCenter';
import Image from './Image';
import RouterLink from './RouterLink';


const HeaderStyled = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 768px) {
    font-size: 16px;
    height: 50px;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    font-size: 18px;
    height: 60px;
  }

  @media (min-width: 1025px) {
    font-size: 20px;
    height: 70px;
  }
`;

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyled>
        <DivFlexCenter align='center'>
          <Image src='./dist/drop.png' onClick={() => navigate('/home')} header='true'/>
        </DivFlexCenter>
        <DivFlexCenter align='center' justify='flex-end'>
          <RouterLink to="/connect">
              connect
          </RouterLink>
          <RouterLink to="/about">
              about
          </RouterLink>
          <RouterLink to="/disclaimer">
              disclaimer
          </RouterLink>
        </DivFlexCenter>
    </HeaderStyled>
  );
};


export default Header;