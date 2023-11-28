// MyContext.js

import React, { createContext, useContext, useReducer } from 'react';

const MyContext = createContext({});

const MyContextProvider = ({ children }) => {
  const initialState = {
    user: {},
    // Add other global state properties as needed
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'SET_USER':
        return { ...state, user: action.payload };
      // Add other cases for different actions as needed
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Set functions to update the global state
  const setUser = (user) => {
    dispatch({ type: 'SET_USER', payload: user });
  };
  // Add other set functions as needed

  return (
    <MyContext.Provider value={{ state, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContextProvider, useMyContext };
