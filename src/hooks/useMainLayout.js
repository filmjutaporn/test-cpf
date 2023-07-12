import React, { useState, useEffect } from "react";

export const useMainLayout = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    const getWidth = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
    };

    window.addEventListener("resize", getWidth);
    getWidth();

    if (screenWidth) {
      setIsShowSideBar(false);
    }

    return () => {
      window.addEventListener("resize", getWidth);
    };
  }, [screenWidth]);

  const handleToggleSidebar = () => {
    setIsShowSideBar(!isShowSideBar);
  };
  return {
    handleToggleSidebar,
    screenWidth,
    isShowSideBar
  };
};
