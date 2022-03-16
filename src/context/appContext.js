import React , { createContext, useState} from 'react';

const initial = {
    theme: true
};

export const AppContext = createContext(initial);

export const AppProvider = ({children}) => {
    const localStorageTheme = localStorage.getItem("theme");
    const [ theme , setTheme ] = useState(localStorageTheme);
    return (
        <AppContext.Provider value={{
            theme,
            toggleTheme: () => {
                setTheme(!theme)
            }
        }}>
            {children}
        </AppContext.Provider>
    )
}