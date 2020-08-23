import React, { createContext, useContext, useReducer } from 'react';

export const StateContext = createContext();

//receive from index.js
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// extract elements from the state object
export const useStateValue = () => useContext(StateContext);
