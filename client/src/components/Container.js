import styled from "styled-components";


const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    height: auto;
    @media (max-width: 768px) {  /* Tablet */
      width: 80%;
    }
    @media (max-width: 480px) {  /* Mobile */
      width: 76%;
    }
`;


export default Container;