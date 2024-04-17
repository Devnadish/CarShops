"use client"
import React, {  useState } from "react";
import UrlContext from "./providerServiceContext";

// export const UrlContext = createContext();
// export const UrlContext = createContext({
//   url: "", 
//   setUrl: () => {}, // Placeholder function to prevent errors if not used
// });

export const UrlProvider = ({ children }) => {
  const [recordCounter, setRecordCounter] = useState(null); // Use an empty string as initial value
  const [pageCount, setPageCount] = useState(null); // Use an empty string as initial value

  const updateRecordCount = (count) => {
    setRecordCounter(count); // Function for updating the URL state
  };

  const updatePageCount = (count) => {
    setPageCount(count); // Function for updating the URL state
  };
  


  return (
    <UrlContext.Provider
      value={{ recordCounter, updateRecordCount, pageCount, updatePageCount }}
    >
      {children}
    </UrlContext.Provider>
  )
};
export default UrlProvider;

// Usage example (assuming this is in a separate component):
