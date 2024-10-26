import styled from "styled-components";


const DivFlexCenter = styled.div`
  padding: 0;
  margin; 0;
  display: flex;
  justify-content: ${({justify}) => justify};
  align-items: ${({align})=> align};

  ${(content) => {
    if (content) {
      return `
        padding: 3px;

        @media (min-width: 769px) and (max-width: 1024px) {
          padding: 5px;
        }
        @media (min-width: 1025px) {
          padding: 7px;
        }
      `;
    }
  }}
`;


export default DivFlexCenter;
