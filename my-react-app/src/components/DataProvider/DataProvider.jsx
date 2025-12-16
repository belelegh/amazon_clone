// import Checkbox from "@mui/material/Checkbox";
// import React, { Children, createContext, useReducer } from "react";
// import { initialState, reducer } from "../../Utility/reducer";
// export const DataContext = createContext();

// const DataProvider = ({ Children, reducer, initialState }) => {
//   return (
//     <DataContext.Provider value={useReducer(reducer, initialState)}>
//       {Children}
//     </DataContext.Provider>
//   );
// };
// export default DataProvider;

import React, { createContext, useReducer } from "react";

// Create Context
export const DataContext = createContext();

const DataProvider = ({ children, reducer, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
