import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import typography from '../Styles/typography';

const fallDown = keyframes`
  from {
    max-height: 0; 
  }
  to {
    max-height: 100vh;
  }
`;

const moveUp = keyframes`
  from {
    max-height: 50vh;
  }
  to {
    max-height: 0; 
  }
`;

const showX = keyframes`
  from {
    max-width: 0;
  }
  to{
    max-width: 100vw;
  }
`;
const hideX = keyframes`
  from {
    max-width: 100vw;
  }
  to{
    max-width: 0;
  }
`;

const moveRotate = (move, rotate) =>
  keyframes`
    0% {
    }
    50%{
      transform-origin: center;
      transform: translateY(${move});
    }
    100%{
      transform-origin: center;
      transform: rotate(${rotate}) translateY(${move}) ;
    }
  `;

const moveRotateBack = (move, rotate) =>
  keyframes`
  0% {
    transform-origin: center;
    transform: rotate(${rotate}) translateY(${move})
  }
  50%{
    transform-origin: center;
    transform: translateY(${move});
  }
  100%{
  }
`;

const NabarStyled = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  min-height: 2.5rem;
  border-bottom: 1px solid ${typography.borderColor};
  background-color: rgba(0,0,0,0.7);
  z-index: 3;
  .bar {
    display: none;
  }

  .icon {
    display: none;
  }
  .column-menu {
    display: none;
  }
  .row-menu {
    position: relative;
    display: flex;
    .login-link {
      position: absolute;
      right: 0;
    }
  }
  @media (max-width: 1024px) {
    position: static;
    .bar {
      display: block;
      height: 2.5rem;
    }
    .icon {
      display: block;
      transition: 0.2s;
      z-index: 3;
      &.onbar {
        position: absolute;
        top: 5px;
        right: 1rem;
      }
      &:hover {
        cursor: pointer;
        transform: scale(1.05);
      }
    }
    .row-menu {
      display: none;
    }
    .column-menu {
      display: flex;
      flex-direction: column;
      max-height: 0;
      overflow: hidden;
      padding: 0;
      width: 100%;
      border-bottom: 3px solid ${typography.borderColor};
      background-color: rgba(0,0,0,0.7);
      z-index:2;
      &.fixed {
        position: fixed;
        top: 2rem;
      }
    }
    .hide {
      animation: ${moveUp} 0.4s forwards;
      &.fixed {
        animation: ${hideX} 0.8s 0.4s forwards, ${fallDown} 0.4s forwards;
      }
    }
    .show {
      animation: ${fallDown} 1.5s forwards;
      &.fixed {
        animation: ${fallDown} 1.7s 0.5s forwards, ${showX} 0.5s forwards;
      }
    }
    .cross #rect-one {
      animation: ${moveRotate('30px', '45deg')} 0.3s linear forwards;
    }
    .cross #rect-two {
      animation: ${moveRotate('0px', '-45deg')} 0.3s linear forwards;
    }
    .cross #rect-three {
      animation: ${moveRotate('-30px', '45deg')} 0.3s linear forwards;
    }
    .menu #rect-one {
      animation: ${moveRotateBack('30px', '45deg')} 0.3s linear forwards;
    }
    .menu #rect-two {
      animation: ${moveRotateBack('0px', '-45deg')} 0.3s linear forwards;
    }
    .menu #rect-three {
      animation: ${moveRotateBack('-30px', '45deg')} 0.3s linear forwards;
    }
  }
`;

const showMenuButton = keyframes`
  0% {
    opacity: 0;
    transform:scale(0.5);
  }
  100% {
    opacity: 1;
    transform:scale(1);
  }

`;

export const MenuButton = styled.div`
  @media (min-width: 1025px) {
    display: none;
  }
  position: fixed;
  top: 1%;
  right: 2%;
  background-color: black;
  display: flex;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  box-shadow: 0 0 4px 1px ${typography.borderColor};
  justify-content: center;
  align-items: center;
  animation: ${showMenuButton} 0.5s forwards linear;
  z-index: 3;
`;

export const StyledLink = styled(NavLink)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  margin: 0 1rem;
  &.active {
    text-decoration: underline;
  }
  @media (max-width: 1024px) {
    width: 100%;
    text-align: center;
    font-size: 2rem;
    margin: 0;
    border-bottom: 1px solid ${typography.borderColor};
    &:last-child {
      border-bottom: none;
    }
  }
`;

export default NabarStyled;
