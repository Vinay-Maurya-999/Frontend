import { createContext, useEffect, useState } from "react";

const dataContext = createContext();

export const DataContextProvider = ({ children }) => {
  const [question, setQuestion] = useState(() => {
    return JSON.parse(localStorage.getItem("questions")) || [];
  });

  useEffect(() => {
    localStorage.setItem("questions", JSON.stringify(question));
  }, [question]);

  return <dataContext.Provider value={{ question, setQuestion }}>{children}</dataContext.Provider>;
};

export default dataContext;
