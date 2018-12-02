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
  // outline: none;
  // border: 2px solid #A9B2C3;
  // white-space: nowrap;
  // box-shadow: inset 0 -4px 0 0 #A9B2C3;
  // border-radius: 7px;
  // font-size: 14px;
  // padding: 14px 20px 18px;
  // min-width: 100px;
`;
export { Card }
