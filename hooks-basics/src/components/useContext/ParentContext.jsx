import React, { createContext, useState } from "react";

export const AppContext = createContext();

const ParentContext = ({ children }) => {
  const [mainCount, setMainCount] = useState(5000);
  const [isDark,setIsDark] = useState(true)

  const decreaseCount = ()=>{
    setMainCount(mainCount-1000)
  }
  const increaseCount = ()=>{
    setMainCount(mainCount+1000)
  }


  return (
    <AppContext.Provider value={{ mainCount, setMainCount,decreaseCount,increaseCount,isDark,setIsDark }}>
      {children}
    </AppContext.Provider>
  );
};

export default ParentContext;
