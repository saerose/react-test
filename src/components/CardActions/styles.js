import styled from 'styled-components';

const ActionWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Button = styled.div`
    margin: 10px;
    position: relative;
    display: inline-block;
    text-align: center;
    font-weight: bold;
    color: #232323;
    outline: none;
    border: 2px solid #232323;
    background-color: white;
    white-space: nowrap;
    box-shadow: inset 0 -4px 0 0 #232323;
    border-radius: 7px;
    font-size: 14px;
    padding: 14px 20px 18px;
    min-width: 100px;
`;

export { ActionWrapper, Button }