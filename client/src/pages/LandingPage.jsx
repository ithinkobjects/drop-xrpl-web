import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DivBackground from '../components/DivBackground';
import SoftButton from '../components/SoftButton';
import Image from '../components/Image';

const LandingPage = ({clickEnter}) => {
  const navigate = useNavigate();

  return (
    <DivBackground>
      <SoftButton onClick={() => {
        clickEnter();
        navigate('/home');
      }}>
        ENTER
      </SoftButton>
    </DivBackground>
  );
};

export default LandingPage;
