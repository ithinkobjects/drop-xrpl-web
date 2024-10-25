import React, { useEffect, useRef, useState } from 'react';
import { Navigate } from 'react-router-dom';

import DivBackground from '../components/DivBackground';
import SoftButton from '../components/SoftButton';
import Image from '../components/Image';

const LandingPage = () => {
  const audioRef = useRef(new Audio('/dist/dropsong.mp3')); // Change this to your audio file path
  const [clickedEnter, setClickedEnter] = useState(false);

  useEffect(() => {
    if (clickedEnter) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [clickedEnter]);

  const handleEnter = () => {
    setClickedEnter(true);
  }

  return (
    <React.Fragment>
      <DivBackground>
        {
          clickedEnter ?
          <Image
            src='/dist/drop.png'
          /> :
          <SoftButton
            onClick={() => handleEnter()}
          >
            ENTER
          </SoftButton>
        }
      </DivBackground>
    </React.Fragment>
  );
};

export default LandingPage;
