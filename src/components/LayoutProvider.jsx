import React, { createContext, useContext, useState } from "react";

const LayoutContext = createContext({ headingIds: [], setHeadingIds: () => {} });

export const LayoutProvider = ({ children }) => {
  const [headingIds, setHeadingIds] = useState([]);
  return (
    <LayoutContext.Provider value={{ headingIds, setHeadingIds }}>
      {children}
    </LayoutContext.Provider>
  );
};

export const useLayout = () => useContext(LayoutContext);
