import SlidersReducer from './SlidersReducer';
import { createContext, useReducer } from 'react';

const INITIAL_STATE = {
  sliders: [],
  isFetching: false,
  error: false,
};

export const SlidersContext = createContext(INITIAL_STATE);

export const SlidersContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SlidersReducer, INITIAL_STATE);

  return (
    <SlidersContext.Provider
      value={{
        sliders: state.sliders,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </SlidersContext.Provider>
  );
};
