import React from "react";

import { CounterDispatcherContext, CounterStateContext } from "./contexts";
import { reducer } from "./reducers";

const CounterProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <CounterDispatcherContext.Provider value={dispatch}>
      <CounterStateContext.Provider value={state}>
        {children}
      </CounterStateContext.Provider>
    </CounterDispatcherContext.Provider>
  );
};

export default CounterProvider;
