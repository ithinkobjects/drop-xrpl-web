import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DivBackground from '../components/DivBackground';
import Header from '../components/Header';
import Container from '../components/Container';
import DivFlexCenter from '../components/DivFlexCenter';
import RouterLink from '../components/RouterLink';
import SpanTxt from '../components/SpanTxt';


const DivContent = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;


const Home = ({clickedEnter}) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!clickedEnter) {
      navigate('/');
    };
  }, [clickedEnter]);

  return (
    <DivBackground home={'true'}>
      <Header/>
        <Container>
          <DivContent>
            <DivFlexCenter content={'true'}>
              <RouterLink
                to={'https://firstledger.net/token/rszenFJoDdiGjyezQc8pME9KWDQH43Tswh/44524F5000000000000000000000000000000000#'}
                target='_blank'
              ><SpanTxt huge={'true'} link='true'>BUY $DROP</SpanTxt></RouterLink>
            </DivFlexCenter>
            <DivFlexCenter content={'true'}>
              <RouterLink
                to={'https://xmagnetic.org/amm/DROP+rszenFJoDdiGjyezQc8pME9KWDQH43Tswh_XRP+XRP?network=mainnet'}
                target='_blank'
              ><SpanTxt huge={'true'} link={'true'}>BOOST LP</SpanTxt></RouterLink>
            </DivFlexCenter>
          </DivContent>
        </Container>
    </DivBackground>
  );
};


export default Home;
