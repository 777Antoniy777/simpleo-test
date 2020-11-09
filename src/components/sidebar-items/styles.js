import styled from "styled-components";
import {BasedList} from "../app/based-styles";

const List = styled(BasedList)``;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 5px;
  text-transform: capitalize;
  transition: opacity 0.3s;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    opacity: 0.7;
  }

  &:active {
    opacity: 0.5;
  }

  div {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
`;

export {List, Item};
