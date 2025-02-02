import { createContext, useContext, useState } from "react";

const CallbackContext = createContext();

export function CallbackProvider({ children }) {
  const [callback, setCallback] = useState(null);

  return (
    <CallbackContext.Provider value={{ callback, setCallback }}>
      {children}
    </CallbackContext.Provider>
  );
}

export function useCallbackContext() {
  return useContext(CallbackContext);
}
