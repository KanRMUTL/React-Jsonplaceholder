import React, { useState, createContext, useContext } from 'react';
interface LoadingContextProps {
  children: React.ReactNode;
}

const LoadingContext = createContext(false);
const LoadinUpdateContext = createContext<(arg: boolean) => void>(() => {});

const useLoading = () => useContext(LoadingContext);
const useLoadingUpdate = () => useContext(LoadinUpdateContext);

const LoadingProvider = ({ children }: LoadingContextProps) => {
  const [loading, setLoading] = useState(false);

  const changeLoading = (isLoading: boolean) => {
    setLoading(isLoading);
  };

  return (
    <LoadingContext.Provider value={loading}>
      <LoadinUpdateContext.Provider value={changeLoading}>{children}</LoadinUpdateContext.Provider>
    </LoadingContext.Provider>
  );
};

export { useLoading, useLoadingUpdate, LoadingProvider };
