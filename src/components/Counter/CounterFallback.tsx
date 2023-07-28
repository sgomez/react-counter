import React, { useCallback } from "react";
import { useErrorBoundary } from "react-error-boundary";

import { useCounter } from "../../state/CounterProvider/hooks";
import CounterButtons from "./CounterButtons";
import CounterTitle from "./CounterTitle";
import ResetButton from "./ResetButton";
import { CounterCard } from "./styles";

type Props = {
  error: Error;
};

const CounterFallback: React.FunctionComponent<Props> = ({ error }) => {
  console.debug("Fallback");
  const { resetCounter } = useCounter();
  const { resetBoundary } = useErrorBoundary();

  const reset = useCallback(() => {
    resetCounter();
    resetBoundary();
  }, [resetCounter, resetBoundary]);

  return (
    <CounterCard>
      <CounterTitle>{error.message}</CounterTitle>
      <CounterButtons>
        <ResetButton onClickHandler={reset} />
      </CounterButtons>
    </CounterCard>
  );
};

export default React.memo(CounterFallback);
