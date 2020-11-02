import styled from "styled-components";
import {BasedList} from "../app/based-styles";

const List = styled(BasedList)``;

const Item = styled.li`
  margin-bottom: 10px;
  padding: 0 20px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export {List, Item};
