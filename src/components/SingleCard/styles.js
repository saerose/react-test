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
export { Card }
