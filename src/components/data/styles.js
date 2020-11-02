import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.section`
  min-height: 100vh;
  width: 100%;
  padding: 30px;
  background-color: ${ConstStyle.C_LIGHTGRAY};
`;

const TableWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;
`;

export {Wrapper, TableWrapper};
