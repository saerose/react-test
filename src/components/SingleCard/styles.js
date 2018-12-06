import styled from 'styled-components';

const opposite = {
  black: 'white',
  white: 'black'
};

const Card = styled.div`
  cursor: pointer;
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
  width: 160px;
  height: 30px;
`;

const DeleteIcon = styled.span`
  cursor: pointer;
  margin-right: 10px;
  float: right;
  color: #FF6347;
  font-size: 30px;
`;

export { Card, DeleteWrapper, DeleteIcon }
