import styled from 'styled-components';

const SoftButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  
  border-radius: 18px;
  border: 2px solid rgba(235, 101, 205);

  width: 150px;
  height: 50px;

  background-color: rgba(235, 101, 205, 0.9);
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    /* Tablet size */
    width: 200px;
    height: 60px;
    font-size: 17px;
  }

  @media (min-width: 1024px) {
    /* Desktop size */
    width: 250px;
    height: 70px;
    font-size: 19px;
  }

  &:hover {
    background-color: rgba(242, 120, 213, 0.9);
  }

  &:active {
    background-color: rgba(242, 120, 213, 0.9);
  }
`;

export default SoftButton;
