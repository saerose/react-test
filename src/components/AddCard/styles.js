import styled from 'styled-components';

const PopUpWrapper = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgb(0,0,0);
    background-color: rgba(0,0,0,0.4);
`;

const PopUpBox = styled.div`
  background-color: #fefefe;
  margin: 15% auto;
  padding: 20px;
  border: 1px solid #888;
  width: 50%;
  height: 50%;
`;

const ClosePop = styled.div`
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: 600;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  width: 500px;
  height: 100px;
  border: 2px solid #232323;
  background-color: white;
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
`;


const Color = styled.div`
  margin: 10px;
  background-color: lavender;
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

export { PopUpWrapper, PopUpBox, ClosePop, Input, Title, ColorWrapper, Color }