import { useRouter } from "next/router";
import React, { createContext, useState, useEffect, useContext } from "react";
import { trackVisit } from "../utils/MixPanel";
import useStore from ".";

interface HValidation {
  history: string[];
  setHistory(data: string[]): void;
}

const HistoryContext = createContext<HValidation>({} as HValidation);
export const HistoryProvider = ({ children }) => {
  const { asPath } = useRouter();
  const { planType } = useStore();
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => {
    trackVisit(asPath, planType);
    setHistory((previous) => [...previous, asPath]);
  }, [asPath]);

  return (
    <HistoryContext.Provider
      value={{
        history,
        setHistory,
      }}
    >
      {children}
    </HistoryContext.Provider>
  );
};

export function useHistory(): HValidation {
  const context = useContext(HistoryContext);
  return context;
}
