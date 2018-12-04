import styled from 'styled-components';

const opposite = {
  black: 'white',
  white: 'black'
};

const Card = styled.div`
  width: 150px;
  height: 200px;
  background-color: ${props => props.color};
  margin: 10px;
  color: ${props => opposite[props.color]};
  border: 1.4px solid #000000;
  border-radius: 7px;
  padding: 5px;
  font-weight: 600;
`;

const DeleteWrapper = styled.div`
    margin: 10px;
    position: absolute;
    width: 163px;
    height: 213px;
    border-radius: 7px;
    background-color: teal;
`;

const DeleteIcon = styled.span`
  cursor: pointer;
  float: right;
  margin: 10px;
  color: #FFFFFF;
`;

export { Card, DeleteWrapper, DeleteIcon }
