import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import DivBackground from '../components/DivBackground';
import Header from '../components/Header';
import Container from '../components/Container';
import DivFlexCenter from '../components/DivFlexCenter';
import SpanTxt from '../components/SpanTxt';


const DivContent = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-content: center;
  height: auto;
  width: 100%;
`;

  const Wrapper = styled.span`
    padding: 1rem;
    border-radius: 5px;
    background: rgba(178, 241, 255, .2);
    width: 100%;
    height: 100%;
  `;

// make sure every Divcontent has content true
const Disclaimer = ({ clickedEnter }) => {
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
          <DivContent content='true'>
            <DivFlexCenter content='true'>
              <SpanTxt huge={'true'} style={{textAlign: 'center'}}>Disclaimer.</SpanTxt>
            </DivFlexCenter>
            <DivFlexCenter content={'true'}>
              <Wrapper>
                <SpanTxt medium={'true'} style={{textAlign: 'left'}}>
                  The developer of this website is not the creator of the token and holds no affiliation with any commercial business or entity.
                  This website has been developed solely for educational purposes and is intended as a resource for the community, by the community.
                  Any content, information, or material provided on this site should not be construed as financial, legal, or investment advice.
                  The developer does not endorse or promote any commercial product or service associated with the token and is not responsible for any financial losses or risks incurred from its use.
                  Please do your own research and exercise caution when participating in any cryptocurrency projects.
                </SpanTxt>
              </Wrapper>
            </DivFlexCenter>
          </DivContent>
        </Container>
    </DivBackground>
  );
};


export default Disclaimer;
