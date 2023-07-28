import React, { MouseEventHandler, useCallback } from "react";

import { CounterDispatcherContext, CounterStateContext } from "./contexts";
import { DECREMENT, INCREMENT, RESET } from "./types";

export const useCounter = () => {
  const state = React.useContext(CounterStateContext);
  const dispatch = React.useContext(CounterDispatcherContext);

  if (state === undefined || dispatch === undefined) {
    throw new Error("useCounter must be used within a CounterProvider");
  }

  const incrementCounter: MouseEventHandler<HTMLButtonElement> = useCallback(
    ({ currentTarget: { dataset } }) => {
      dispatch({
        type: INCREMENT,
        value: parseInt(dataset.step as string, 10),
      });
    },
    [dispatch]
  );

  const decrementCounter: MouseEventHandler<HTMLButtonElement> = useCallback(
    ({ currentTarget: { dataset } }) => {
      dispatch({
        type: DECREMENT,
        value: parseInt(dataset.step as string, 10),
      });
    },
    [dispatch]
  );

  const resetCounter = useCallback(() => {
    dispatch({
      type: RESET,
    });
  }, [dispatch]);

  return {
    decrementCounter,
    incrementCounter,
    resetCounter,
    state,
  };
};
