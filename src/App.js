import React, { useState, useEffect } from "react";
import MenuBar from "./components/MenuBar";
import Sidebar from "./components/Sidebar";
import { useApp } from "./hooks/useApp";

function App(props) {
  const { children } = props;
  const { handleToggleSidebar, screenWidth, isShowSideBar } = useApp();

  return (
    <>
      <MenuBar handleToggleSidebar={handleToggleSidebar} />

      <div
        className="d-flex w-100"
        style={{ overflowY: `${screenWidth < 767 ? "hidden" : "auto"}` }}
      >
        <Sidebar isShowSideBar={isShowSideBar} screenWidth={screenWidth} />

        <div
          style={{ width: `${isShowSideBar ? "calc(100% - 270px)" : "100%"}` }}
        >
          {children}
        </div>
      </div>
    </>
  );
}

export default App;
