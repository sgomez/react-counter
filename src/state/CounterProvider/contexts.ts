import React from "react";

import { CounterActions, CounterState } from "./types";

export const CounterStateContext = React.createContext<CounterState>(0);

export const CounterDispatcherContext = React.createContext<
  (action: CounterActions) => void
>(() => ({}));
