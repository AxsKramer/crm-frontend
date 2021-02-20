import React, { useState, createContext } from "react";

export const CRMContext = createContext([{}, () => {}]);

const CRMProvider = ({ children }) => {
  const [auth, setAuth] = useState({ token: "", auth: false });

  return (
    <CRMContext.Provider value={[ auth, setAuth ]}>
      {children}
    </CRMContext.Provider>
  );
};

export default CRMProvider;
