import React from "react";

import {
  CounterActions,
  CounterState,
  DECREMENT,
  INCREMENT,
  RESET,
} from "./types";

export const reducer: React.Reducer<CounterState, CounterActions> = (
  state,
  action
) => {
  switch (action.type) {
    case INCREMENT: {
      const nextState = state + action.value;

      return nextState;
    }
    case DECREMENT: {
      return state - action.value;
    }
    case RESET: {
      return 0;
    }
    default: {
      return state;
    }
  }
};
