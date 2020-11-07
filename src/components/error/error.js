import React from "react";
import {RequestStatus} from "../../js/enums";
import {ErrorDescription} from "./styles";

const Error = ({requestData}) => {
  let status = null;
  let message = null;

  for (let i = 0; i < requestData.length; i++) {
    status = requestData[i].status;
    message = requestData[i].message;

    if (status === RequestStatus.ERROR) {
      break;
    }
  }

  return (
    <React.Fragment>
      { status === RequestStatus.ERROR &&
        <ErrorDescription>{message}</ErrorDescription>
      }
    </React.Fragment>
  );
};

export default Error

