import React, { useContext, createContext, useState } from "react";

const IntroAnimationContext = createContext();

export const IntroAnimationProvider = ({ children }) => {
  const [introCompleted, setIntroCompleted] = useState(false);

  return (
    <IntroAnimationContext.Provider
      value={{ introCompleted, setIntroCompleted }}
    >
      {children}
    </IntroAnimationContext.Provider>
  );
};

const useIntroAnimationContext = () => useContext(IntroAnimationContext);
export default useIntroAnimationContext;
