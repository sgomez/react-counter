import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import React, { MouseEventHandler } from "react";

import { CounterButton as StyledCounterButton } from "./styles";

type ButtonProps = {
  onClickHandler: MouseEventHandler<HTMLButtonElement>;
  step: number;
};

const DecrementButton: React.FunctionComponent<ButtonProps> = ({
  onClickHandler,
  step,
}) => {
  console.debug(`IncrementButton ${step}`);

  return (
    <StyledCounterButton onClick={onClickHandler} data-step={step}>
      {step} <ChevronLeftIcon height={12} />
    </StyledCounterButton>
  );
};

export default React.memo(DecrementButton);
