import styled from "styled-components";

const TableCell = styled.td`
  width: 50%;
  padding: 10px;

  &.buttons-cell {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .buttons-wrapper {
      display: flex;
      min-width: 70px;

      .button {
        width: 30px;
        height: 30px;
        border: none;
        cursor: pointer;

        &.button-edit {

        }

        &:first-child {
          margin-right: 10px;
        }
      }
    }
  }
`;

export {TableCell};
