import styled from "styled-components";
import {BasedList} from "../app/based-styles";

const List = styled(BasedList)``;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 5px;
  text-transform: capitalize;
  cursor: pointer;

  div {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }

  &:last-child {
    margin-bottom: 0;
  }
`;

export {List, Item};
