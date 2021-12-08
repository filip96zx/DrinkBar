import styled from "styled-components";
import typography from "../../Styles/typography";
import searchIcon from "../../Assets/search_black_24dp.svg";


const SearchStyled = styled.div`
  position: fixed;
  top:0;
  transition:0.8s;
  transform: translateY(-105%);
  color: white;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.2rem;
  z-index: 2;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  background: rgba(0,0,0,0.6);
  box-shadow: 0 5px 3px 0 rgba(0,0,0,0.6);
  padding-bottom: 10px;
  &.show {
    transform: translateY(0%);
  }
  h2 {
    color:white;
    text-align: center;
    width: 100%;
    @media(max-width:520px){
        margin-bottom: 30px;
      }
  }
  form {
    margin-bottom: 5px;
    @media(max-width:850px){
    width: 100%;
    }
    .form-group {
      position: relative;
      text-align: center;
      @media(max-width:520px){
        text-align: left;
      }
      @media(max-width:850px){
      
        label {
        position:absolute;
        }
        input{
        margin-left: 11ch;
        }
      }
    }    
  }

  input {
    font-size: 1.2rem;
  }
  .hints{
    position: absolute;
    right: 0;
    display: flex;
    flex-direction:column;
    max-height: 50vh;
    overflow: auto;
    width: 15rem;
    cursor: pointer;
    &:hover {
      .hint:nth-of-type(1){
      background: ${typography.mainColor};
      }
    }
  }
  .hint {
    font-size: 1.2rem;
    border: none; 
    padding: 2px;
    text-align: left;
    &:nth-of-type(1){
      background: ${typography.secondaryColor};
    }
    background: ${typography.mainColor};
    color:${typography.fontColor};
    strong {
      font-weight: 900;
    }
    &:hover{
      background: ${typography.secondaryColor} !important;
    }
  }
  
`;

export const SearchButtonStyled = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  background: url(${searchIcon}),${typography.mainColor};
  background-size: 50px;
  //outline: none;
  transform: translateY(-200%);
  transition: 1s;
  border: 3px solid ${typography.secondaryColor};
  box-shadow: 2px 2px 3px 0px ${typography.mainColor};
  width: 50px;
  height: 50px;
  border-radius: 50%;
  z-index:3;
  &.show{
    transform: translateY(0%);
  }
`;


export default SearchStyled;