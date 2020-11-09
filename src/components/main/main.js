import React from "react";
import {MainWrapper, SiteWrapper, Title} from "./styles";
import Sidebar from "../sidebar/sidebar";
import Data from "../data/data";

const Main = () => {
  return (
    <MainWrapper>
      <SiteWrapper>
        <Title>React App</Title>

        {/* Sidebar */}
        <Sidebar />

        {/* Data screen */}
        <Data />

      </SiteWrapper>
    </MainWrapper>
  );
};

export default Main;
