import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTelegram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
  height: auto;
  width: 100%;
`;

const ConnectPage = ({clickedEnter}) => {
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
              <SpanTxt huge={'true'}>Get the drop.</SpanTxt>
            </DivFlexCenter>
            <DivFlexCenter content={'true'} align='center' justify='space-around'>
              <RouterLink
                to={'https://t.co/lIAsWEuKgz'}
                target='_blank'
              >
                <SpanTxt huge={'true'}>
                 <FontAwesomeIcon icon={faTelegram}/>
                </SpanTxt>
              </RouterLink>
              <RouterLink
                to={'https://x.com/dropcoinxrpl'}
                target='_blank'
              >
                <SpanTxt huge={'true'}>
                  <FontAwesomeIcon icon={faTwitter}/>
                </SpanTxt>
              </RouterLink>
              <RouterLink
                to={'https://www.tiktok.com/@dropxrpl'}
                target='_blank'
              >
                <SpanTxt huge={'true'}>
                  <FontAwesomeIcon icon={faTiktok}/>
                </SpanTxt>
              </RouterLink>
            </DivFlexCenter>
          </DivContent>
        </Container>
    </DivBackground>
  );
};


export default ConnectPage;
