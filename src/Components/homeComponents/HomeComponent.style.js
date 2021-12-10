import styled from 'styled-components';

const HomeStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  height: 100vh;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
  @media (min-height: 400px) {
    scroll-snap-type: y mandatory;
  }
`;

export const NavbarSpace = styled.div`
  @media (min-width: 1025px) {
    height: 5rem;
    width: 100%;
  }
`;

export default HomeStyled;
