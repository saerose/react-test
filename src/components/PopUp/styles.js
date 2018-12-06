import styled from 'styled-components';

const opposites = {
  black: 'white',
  white: 'black'
}

const PopUpWrapper = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: none;
  background-color: rgb(0,0,0);
  background-color: rgba(0,0,0,0.4);
`;

const PopUpBox = styled.div`
  background-color: #fefefe;
  margin: 10% auto;
  padding: 20px;
  border-radius: 20px;
  width: 40%;
  height: 70%;
`;

const ClosePop = styled.div`
  cursor: pointer;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  width: 150px;
  height: 200px;
  border: 2px solid #232323;
  color: ${props => opposites[props.color]}
  background-color: ${props => props.color};
  white-space: nowrap;
  box-shadow: inset 0 -4px 0 0 #232323;
  border-radius: 7px;
  outline: none;
  font-weight: 600;
`;

const Title = styled.h1`
  font-weight: 600;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 600;
`;

const White = styled.div`
  cursor: pointer;
  margin: 10px;
  color: black;
  font-size: 1.5em;
  text-align: center;
  line-height: 50px;
  background-color: #FFFFFF;
  border: 1px solid #000000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const Black = styled.div`
  cursor: pointer;
  color: white;
  font-size: 1.5em;
  text-align: center;
  line-height: 50px;
  margin: 10px;
  background-color: #000000;
  border: 1px solid #000000;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const AddButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  width: 10em;
  height: 4em;
  background-color: #000000;
  color: #FFFFFF;
  font-weight: 600;
  font-size: 14px;
  border-radius: 30px;
  float: right;
    :focus {
    outline: none;
  }
`;

export {
  PopUpWrapper,
  PopUpBox,
  ClosePop,
  Input,
  Title,
  ColorWrapper,
  White,
  Black,
  AddButton
}