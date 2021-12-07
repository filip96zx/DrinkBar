import styled from 'styled-components';

const Tile = styled.div`
  position: relative;
  display: flex;
  margin: 1rem auto;
  box-shadow:2px 2px 3px 1px rgba(10,10,10,0.8);
  border-radius: 0.3rem;
  @media(min-width:1025px){
    flex-basis: 30%;
  }
  @media(min-width:1500px){
    flex-basis: 21%;
  }
  @media(max-width:1024px){
    flex-basis: 40%;
  }
  @media(max-width:600px){
    flex-basis: 90%;
  }
  height: 400px;
  transition: 0.3s;
  overflow: hidden;
  .shadow-box {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 90%), radial-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.95) 90%);
    box-shadow: inset 0 0 15px 0 black;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    width: 98%;
    height: 98%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

    &:hover {
      transform: scale(1.1);
      .info-background {
        transform:translateY(-10%);
        transition-delay: 1.1s;
      } 
      .drink-info {
        height: auto;
        transition-delay: 1.1s;
        transform: translateY(0%) translateX(22px);
        .line {
          transition-delay:2.1s;
          transform: translateX(0%);
          opacity: 1;
        }
        ul {
          transition-delay:1.4s;
          opacity: 1;
        }
        p {
          transition-delay:2.6s;
          opacity: 1;
        }
      }
    }
    &:active {
      transform: scale(1.1);
      .info-background {
        transform:translateY(-10%);
        transition-delay: 1.1s;
      } 
      .drink-info {
        height: auto;
        transition-delay: 1.1s;
        transform: translateY(0%) translateX(22px);
        .line {
          transition-delay:2.1s;
          transform: translateX(0%);
          opacity: 1;
        }
        ul {
          transition-delay:1.4s;
          opacity: 1;
        }
        p {
          transition-delay:2.6s;
          opacity: 1;
        }
      }
    }
  .info-background {
    position: absolute;
    width: 110%;
    height: 100%;
    background: linear-gradient(1turn, rgba(0,0,0,0.5) 90%,rgba(0,0,0,0));
    transform: translateY(100%);
    transition: 1s;
    transition-delay: 1.1s;
  }

  .drink-info {
    h2 {
      margin: 1rem 0;
    }
    transition: 1s;
    transition-delay: 1s;
    width: 120%;
    height: 100%;
    transform: translateY(80%) translateX(22px);
    overflow: auto;
    .line {
      display: block;
      width:90%;
      transform: translateX(-100%);
      transition: .8s;
      transition-delay: .7s;
      opacity: 0.3;
      margin-bottom: 6px;
      height: 10px;
      border-bottom: 1px solid white;
    }
    ul {
      opacity: 0;
      transition: 1s;
      transition-delay: .8s;
      list-style: none;
    }
    p {
      opacity: 0;
      transition: 0.7s;
      transition-delay: .5s;
      height: fit-content;
      padding-right: 30px;
    }
  }
`;

export const WaitingTile = styled(Tile)`
  background: rgba(0,0,0,0.65);

`;

export default Tile;
