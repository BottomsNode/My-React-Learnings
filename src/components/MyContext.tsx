import { createContext, type ReactNode, useContext } from "react";

interface MyContextType {
    data: string;
    setData: React.Dispatch<React.SetStateAction<string>>;
}

// Create the context with default values
export const MyContext = createContext<MyContextType | undefined>(undefined);


// Context provider component
export const MyContextProvider: React.FC<{ value: MyContextType; children: ReactNode }> = ({ value, children }) => {
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

// custom useContext Hook
export const useMyContext = (): MyContextType => {
    const context = useContext(MyContext);
    if (!context) {
        throw new Error('useMyContext must be used within a MyContextProvider');
    }
    return context;
};
