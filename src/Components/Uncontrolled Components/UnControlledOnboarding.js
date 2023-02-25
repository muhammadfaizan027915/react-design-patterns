import React, { useState } from "react";

const UnControlledOnboarding = ({ children }) => {
  const [current, setCurrent] = useState(0);
  const currentChild = React.Children.toArray(children)[current];

  const next = () => {
    const nextIndex = current + 1;
    if (nextIndex < children.length) {
      setCurrent(nextIndex);
    }
  };

  const back = () => {
    const backIndex = current - 1;
    if (backIndex >= 0) setCurrent(backIndex);
  };

  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { back, next });

  return currentChild;
};

export default UnControlledOnboarding;
