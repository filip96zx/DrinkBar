import styled from "styled-components";

const ContainerStyled = styled.div`


.background-img{
  position: fixed;
  top:0;
  background:url(${props => props.bg});
  background-size: cover;
  height: 100vh;
  width: 100vw;
  div{
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.85);
  }
}



`;


export default ContainerStyled;