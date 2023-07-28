export const INCREMENT = Symbol();
export const DECREMENT = Symbol();
export const RESET = Symbol();

export type CounterState = number;

export interface CounterIncrementAction {
  type: typeof INCREMENT;
  value: number;
}

export interface CounterDecrementAction {
  type: typeof DECREMENT;
  value: number;
}

export interface CounterResetAction {
  type: typeof RESET;
}

export type CounterActions =
  | CounterIncrementAction
  | CounterDecrementAction
  | CounterResetAction;
