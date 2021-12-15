import styled, { keyframes } from 'styled-components';

const likeAnimaton = keyframes`
  from {
    fill:darkred;
    transform: rotateY(90deg);
  }
  to {
    fill:darkred;
    transform: rotateY(0deg);
  }
`;
const unLikeAnimaton = keyframes`
  from {
    transform: rotateY(90deg);
  }
  to {
    fill:gray;
    transform: rotateY(0deg);
  }
`;

const tileAppear = keyframes`
  from{
    opacity: 0;
    transform: rotateX(-10deg);
  }
  to{
    opacity: 1;
    transform: rotateX(0);
  }
`;

const Tile = styled.div`
  margin: 1rem 0 1rem;
  position: relative;
  display: flex;
  box-shadow: 2px 2px 3px 1px rgba(10, 10, 10, 0.8);
  background: rgba(0, 0, 0, 0.65);
  border-radius: 0.3rem;
  width: 100%;
  height: 400px;
  transition: 0.3s;
  overflow: hidden;
  animation: ${tileAppear} 1s;

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
      transform: translateY(-10%);
      transition-delay: 1.1s;
    }
    .drink-info {
      height: auto;
      transition-delay: 1.1s;
      transform: translateY(0%) translateX(22px);
      .line {
        transition-delay: 2.1s;
        transform: translateX(0%);
        opacity: 1;
      }
      ul {
        transition-delay: 1.4s;
        opacity: 1;
      }
      p {
        transition-delay: 2.6s;
        opacity: 1;
      }
    }
  }
  &:active {
    transform: scale(1.1);
    .info-background {
      transform: translateY(-10%);
      transition-delay: 1.1s;
    }
    .drink-info {
      height: auto;
      transition-delay: 1.1s;
      transform: translateY(0%) translateX(22px);
      .line {
        transition-delay: 2.1s;
        transform: translateX(0%);
        opacity: 1;
      }
      ul {
        transition-delay: 1.4s;
        opacity: 1;
      }
      p {
        transition-delay: 2.6s;
        opacity: 1;
      }
    }
  }

  .info-background {
    position: absolute;
    width: 110%;
    height: 100%;
    background: linear-gradient(1turn, rgba(0, 0, 0, 0.5) 90%, rgba(0, 0, 0, 0));
    transform: translateY(100%);
    transition: 1s;
    transition-delay: 1.1s;
  }
  .drink-info {
    scroll-behavior: smooth;
    h2 {
      margin: 1rem 0;
      width: 80%;
    }
    transition: 1s;
    transition-delay: 1s;
    width: 120%;
    transform: translateY(80%) translateX(22px);
    overflow: auto;
    .line {
      display: block;
      width: 90%;
      transform: translateX(-100%);
      transition: 0.8s;
      transition-delay: 0.7s;
      opacity: 0.3;
      margin-bottom: 6px;
      height: 10px;
      border-bottom: 1px solid white;
    }
    ul {
      opacity: 0;
      transition: 1s;
      transition-delay: 0.8s;
      list-style: none;
    }
    p {
      opacity: 0;
      transition: 0.7s;
      transition-delay: 0.5s;
      text-align: justify;
      padding-right: 2.5rem;
      margin-bottom: 3.7rem;
      width: calc(100%- 22px);
    }
  }
  button {
    position: absolute;
    top: calc(80% + 7px);
    right: 5px;
    border: none;
    outline: none;
    padding: 15px;
    background-color: rgba(0, 0, 0, 0);
    -webkit-tap-highlight-color: transparent;
    cursor: pointer;
    transition: 0.2s;
    &:hover {
      transform: scale(1.1);
    }
    &:active {
      transition: 0.1s;
      transform: scale(0.95);
    }
    svg {
      fill: gray;
      width: 1.5rem;
      height: 1.5rem;
      animation: ${unLikeAnimaton} 0.8s forwards;
      &.like {
        animation: ${likeAnimaton} 0.8s forwards;
      }
    }
  }
`;

export const Wrapper = styled.div`
  z-index: 1;
  @media (min-width: 1025px) {
    flex-basis: 30%;
  }
  @media (min-width: 1500px) {
    flex-basis: 21%;
  }
  @media (max-width: 1024px) {
    scroll-snap-align: start;
    flex-basis: 40%;
    height: 50vh;
    min-height: 400px;
  }
  @media (max-width: 600px) {
    scroll-snap-align: start;
    flex-basis: 90%;
    height: 100vh;
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WaitingTile = styled(Wrapper)`
  div {
    height: 400px;
    background: rgba(0, 0, 0, 0.65);
    box-shadow: 2px 2px 3px 1px rgba(10, 10, 10, 0.8);
    border-radius: 0.3rem;
    width: 100%;
    margin: 1rem 0 1rem;
    transition: 0.3s;
  }
`;

export default Tile;
