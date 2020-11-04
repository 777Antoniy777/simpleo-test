import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";

const Wrapper = styled.aside`
  display: flex;
  flex-direction: column;
  max-width: ${props => props.fullsidebar ? "200px" : "96px"};
  min-height: 100vh;
  width: 100%;
  padding: 60px 30px;
  font-weight: 700;
  color: ${ConstStyle.C_WHITE};
  background-color: ${ConstStyle.C_LIGHTBLUE};
  transition: 0.3s;
`;

const Button = styled.button`
  width: 40px;
  height: 40px;
  margin: auto auto 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export {Wrapper, Button};
