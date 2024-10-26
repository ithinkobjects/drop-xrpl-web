import styled from 'styled-components';

const Image = styled.img`
  ${({header, about, }) => {
    if (header) {
      return `
        width: 45px;
        height: auto;
        max-width: 200px;
        padding: 0px 13px;

        @media (min-width: 769px) and (max-width: 1024px) {
          width: 55px;
          padding: 0px 16px;

        }
        @media (min-width: 1025px) {
          width: 65px;
          padding: 0px 19px;
        }
      `;
    } else if (about) {
      return `
        float: left;
        margin-right: 20px;
        max-width: 150px;
        height: auto;
        border-radius: 6px;
        @media (min-width: 769px) and (max-width: 1024px) {
          max-width: 200px;

        }
        @media (min-width: 1025px) {
          max-width: 250px;
        }
      `;
    } else {
      return `
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
        @media (max-width: 768px) {  /* Tablet */
          width: 160px;
        }
        @media (max-width: 480px) {  /* Mobile */
          width: 120px;
        }
        `;
      }
    }}
    
  cursor: pointer;

  &:hover {
   
  }
`;

export default Image;
