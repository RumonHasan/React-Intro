import React, {useContext, useState, useEffect, useReducer} from 'react';
import reducer from './reducer';
const AppContext = React.createContext();

const ContextProvider = ({children})=>{
    const [correctLetter, setCorrectLetter] = useState([]);
    const [wrongLetter, setWrongLetter] = useState([]);

    return(
        <AppContext.Provider value={{
            correctLetter,
            wrongLetter,
            setCorrectLetter,
            setWrongLetter,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export default ContextProvider;
