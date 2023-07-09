import React, { useEffect, useState } from "react";

export const useSidebar = () => {
  const [sidebarSelected, setSidebarSelected] = useState(null);

  useEffect(() => {
    const pathname = window?.location?.pathname;
    const path = pathname.split("/")[1];
    setSidebarSelected(path);
  }, []);

  return {
    sidebarSelected,
  };
};
