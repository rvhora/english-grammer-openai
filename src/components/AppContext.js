import React, { useContext, useState } from "react";

const AppContext = React.createContext();
const AppProvider = ({children})=>{
    const [darkTheme, setDarkTheme] = useState(true);
    const [starter, setStarter] = useState(true);
    const changeTheme = ()=>{
        setDarkTheme(!darkTheme);
    }

    const hideStarter = ()=>{
        setStarter(!starter);
    }

    const values = {
        darkTheme, changeTheme, starter, hideStarter
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };