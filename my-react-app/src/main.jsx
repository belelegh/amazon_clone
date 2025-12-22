
// main.jsx or index.jsx
// import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import { BrowserRouter } from "react-router-dom";
// import { StateProvider } from "./components/StateProvider/StateProvider.jsx"; // Fixed import
// import { initialState, reducer } from "./Utility/reducer.js";
// import App from "./App.jsx";
// // import "./index.css"; // Uncomment if you have this file

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <StrictMode>
    
//       <StateProvider reducer={reducer} initialState={initialState}>
//         <App />
//       </StateProvider>
    
//   </StrictMode>
// );


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import DataProvider from "./components/DataProvider/DataProvider.jsx"
import ReactDom from 'react-dom/client'
// import './index.css'
import App from "./App.jsx";
import { initialState, reducer } from "./Utility/reducer.js";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DataProvider reducer={reducer} initialState={initialState} >
      <App />
    </DataProvider>
  </StrictMode>
);
