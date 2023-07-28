import React from "react";
import { ErrorBoundary } from "react-error-boundary";

import { useCounter } from "../../state/CounterProvider/hooks";
import CounterButtons from "./CounterButtons";
import CounterFallback from "./CounterFallback";
import CounterNumber from "./CounterNumber";
import CounterTitle from "./CounterTitle";
import DecrementButton from "./DecrementButton";
import IncrementButton from "./IncrementButton";
import ResetButton from "./ResetButton";
import { CounterCard } from "./styles";

const Counter: React.FunctionComponent = () => {
  console.debug("Counter");
  const { decrementCounter, incrementCounter, resetCounter, state } =
    useCounter();

  return (
    <ErrorBoundary FallbackComponent={CounterFallback}>
      <CounterCard>
        <CounterTitle>Counter</CounterTitle>
        <CounterNumber value={state} />
        <CounterButtons>
          <DecrementButton onClickHandler={decrementCounter} step={5} />
          <DecrementButton onClickHandler={decrementCounter} step={1} />
          <ResetButton onClickHandler={resetCounter} />
          <IncrementButton onClickHandler={incrementCounter} step={1} />
          <IncrementButton onClickHandler={incrementCounter} step={5} />
        </CounterButtons>
      </CounterCard>
    </ErrorBoundary>
  );
};

// export default Counter;
export default React.memo(Counter);
