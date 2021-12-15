import styled, { keyframes } from 'styled-components';

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

const MenuIcon = styled.div`
  margin-right: 10px;
  overflow: visible;
  padding: 0 7px;
  transition: 0.2s;
  -webkit-tap-highlight-color: transparent;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
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
`;

export default MenuIcon;
