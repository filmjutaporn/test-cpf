import React from "react";
import MenuBar from "./components/MenuBar";
import Sidebar from "./components/Sidebar";
import { useMainLayout } from "./hooks/useMainLayout";

const MainLayout = (props) => {
  const { children } = props;
  const { handleToggleSidebar, screenWidth, isShowSideBar } = useMainLayout();

  return (
    <>
      <MenuBar handleToggleSidebar={handleToggleSidebar} />

      <div
        className="w-100"
        style={{
          overflowY: `${screenWidth < 767 ? "hidden" : "auto"}`,
          position: "relative",
        }}
      >
        <Sidebar isShowSideBar={isShowSideBar} screenWidth={screenWidth} />

        <div
          style={{
            marginLeft: `${isShowSideBar ? "270px" : "0px"}`,
            transition: " margin-left 0.3s",
          }}
        >
          {children}
        </div>
      </div>
    </>
  );
};

export default MainLayout;
