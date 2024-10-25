import styled from 'styled-components';

const Image = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-size: cover;
  background-position: center;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, background-size 0.3s ease-in-out;

  &:hover {
   
  }

  @media (max-width: 768px) {  /* Tablet */
    width: 160px;
  }

  @media (max-width: 480px) {  /* Mobile */
    width: 120px;
  }
`;

export default Image;
