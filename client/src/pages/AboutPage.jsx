import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DivBackground from '../components/DivBackground';
import Header from '../components/Header';
import Image from '../components/Image';
import Container from '../components/Container';
import DivFlexCenter from '../components/DivFlexCenter';
import SpanTxt from '../components/SpanTxt';


const DivContent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  padding: 1rem;
  margin: 0;
  width: 100%;
  border-radius: 5px;
  background: rgba(178, 241, 255, .2);
`;


const About = ({ clickedEnter }) => {
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
             <SpanTxt huge={'true'} style={{textAlign: 'left'}}>About.</SpanTxt>
            </DivFlexCenter>
            <DivFlexCenter content={'true'}>
              <Wrapper>
                <Image about='true' src='/dist/droptrekk.png'/>
                <SpanTxt medium={'true'} style={{textAlign: 'left'}}>
                  Hi, my name is Drop! There are 1,000,000 drops in one XRP. Which is equal to 0.000001 XRP.
                  This means that one XRP is equal to one million drops and the supply of $DROP is one million.
                  We represent the strength and unity of the XRP community, started by a leader in the space then taken over by the community and built into an army that can't be stopped!
                  We are the largest and fastest growing meme coin on First Ledger and have our sights set on becoming the premier blue chip meme as well as the official mascot for the XRPL!
                </SpanTxt>
              </Wrapper>
            </DivFlexCenter>
          </DivContent>
        </Container>
    </DivBackground>
  );
};


export default About;
