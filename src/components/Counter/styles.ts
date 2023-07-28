import styled from "styled-components";

const CounterCard = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
`;

const CounterNumber = styled.h1`
  font-size: 32px;
  text-align: center;
  margin: 0;
  color: black;
`;

const CounterButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const CounterButton = styled.button`
  background-color: #e0e0e0;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  color: black;
  border-radius: 0;

  &:hover {
    background-color: #bdbdbd;
  }

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;

const StyledCounterTitle = styled.h2`
  color: black;
`;

export {
  CounterButton,
  CounterButtons,
  CounterCard,
  CounterNumber,
  StyledCounterTitle,
};
