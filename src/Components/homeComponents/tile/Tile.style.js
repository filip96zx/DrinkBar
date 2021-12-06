import styled from 'styled-components';

const Tile = styled.div`
  position: relative;
  display: flex;
  margin: 1rem auto;
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
    height: 400px;
  }
  height: 400px;
  transition: 0.3s;
  overflow: hidden;
  .shadow-box {
    position: absolute;
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1) 90%), radial-gradient(rgba(0, 0, 0, 0) 60%, rgba(0, 0, 0, 0.95) 90%);
    box-shadow: inset 0 0 15px 0 transparent;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    width: 99%;
    height: 99%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  /* &:focus{
    transform: scale(1.05);
    .drink-info {
      transform: translateY(0%);
      ul {
        opacity: 1;
      }
      p {
        opacity: 1;
      }
    }
  } */
    &:hover {
      transform: scale(1.05);
      overflow: scroll;
      overflow-x: hidden;
      overflow-y: hidden;
      .drink-info {
        transform: translateY(0%) translateX(20px);
        ul {
          opacity: 1;
        }
        p {
          opacity: 1;
        }
      }
    }
    &:active {
      transform: scale(1.05);
      .drink-info {
        transform: translateY(0%) translateX(20px);
        ul {
          opacity: 1;
        }
        p {
          opacity: 1;
        }
      }
    }


  .drink-info {
    h3 {
      margin-bottom: 1rem;
    }
    /* position: absolute;
    bottom: 5%;
    left: 2%; */
    transition: 1s;
    width: 100%;
    transform: translateY(90%) translateX(20px);

    overflow: scroll;
    overflow-x: hidden;
    ul {
      opacity: 0;
      width: 90%;
      transition: 1s;
      list-style: none;
      border-bottom: 1px solid white;
    }
    p {
      opacity: 0;
      transition: 2s;
      height: fit-content;
      padding-right: 17px;
    }
  }
  @media(max-width:600px) {
    .drink-info {
      transform: translateY(0%) translateX(20px);
      ul {
        opacity: 1;
      }
      p {
        opacity: 1;
      }
    }
  }
`;

export default Tile;
