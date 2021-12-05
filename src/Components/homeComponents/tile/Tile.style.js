import styled from 'styled-components';

const Tile = styled.div`
  position: relative;
  margin: 20px auto;
  flex-basis: 90%;
  width: fit-content;
  min-height: 90vw;
  transition: 0.3s;
  overflow: hidden;
  .content {
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
  &:focus{
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
  }
  @media(hover: hover){
    &:hover {
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
    }

  }

  @media (hover: none) {
    &:hover {
      transform: scale(1);
      .drink-info {
        transform: translateY(0%);
        ul {
          opacity: 1;
        }
        p {
          opacity: 1;
        }
      }
    }
  }

  .drink-info {
    h3 {
      margin-bottom: 1rem;
    }
    position: absolute;
    bottom: 5%;
    left: 2%;
    transition: 1s;
    transform: translateY(90%);
    ul {
      opacity: 0;
      transition: 1s;
      list-style: none;
      border-bottom: 1px solid white;
    }
    p {

      opacity: 0;
      transition: 2s;
    }
  }
  @media(max-width:600px) {
    .drink-info {
      transform: translateY(0%);
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
