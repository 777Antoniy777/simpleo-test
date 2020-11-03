import styled from "styled-components";
import {ConstStyle} from "../app/const-styles";
import {visuallyHiddenStyle, BasedSiteWrapper} from "../app/based-styles";

const FormWrapper = styled.section`
  min-height: 100vh;
  font-size: 16px;
  font-weight: 700;
  color: ${ConstStyle.C_BLACK};
  background-color: ${ConstStyle.C_LIGHTGRAY};
`;

const SiteWrapper = styled(BasedSiteWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: inherit;
`;

const Title = styled.h1`
  ${visuallyHiddenStyle}
`;

const Form =  styled.form`
  width: 275px;
  padding: 15px;
  background-color: ${ConstStyle.C_WHITE};
  border-radius: 15px;

  .input-wrapper {
    margin-bottom: 15px;
  }

  label {
    display: block;
  }

  input {
    width: 90%;
    height: 30px;
    padding: 0 10px;
    border: none;
    border-bottom: 1px solid ${ConstStyle.C_BLACK};
  }

  .buttons-wrapper {
    display: flex;
    width: 100%;

    button {
      padding: 10px 20px;
      font-weight: 700;
      text-transform: uppercase;
      color: ${ConstStyle.C_BLUE_VIOLET};
      background-color: ${ConstStyle.C_WHITE};
      border: 1px solid ${ConstStyle.C_BLACK};
      cursor: pointer;

      &:first-child {
        border-right: none;
        border-bottom-left-radius: 5px;
        border-top-left-radius: 5px;
      }

      &:last-child {
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
      }
    }
  }
`;

export {FormWrapper, SiteWrapper, Title, Form};
