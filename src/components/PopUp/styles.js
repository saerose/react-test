import styled from 'styled-components';

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
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  border-radius: 20px;
  width: 50%;
  height: 55%;
`;

const ClosePop = styled.div`
  cursor: pointer;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: 600;
`;

const opposites = {
  black: 'white',
  white: 'black'
}

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 90%;
  height: 100px;
  border: 2px solid #232323;
  color: ${props => opposites[props.color]}
  background-color: ${props => props.color};
  white-space: nowrap;
  box-shadow: inset 0 -4px 0 0 #232323;
  border-radius: 7px;
  font-size: 14px;
  outline: none;
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