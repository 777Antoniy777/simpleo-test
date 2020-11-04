import styled from "styled-components";
import {BasedList} from "../app/based-styles";

const List = styled(BasedList)``;

const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 0 5px;

  &:last-child {
    margin-bottom: 0;
  }

  svg {
    margin-right: 10px;
  }

  span {
    cursor: pointer;
  }
`;

export {List, Item};
