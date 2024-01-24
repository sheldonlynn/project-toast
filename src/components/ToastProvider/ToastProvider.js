import React from "react";
import Toast from "../Toast";

export const ToastContext = React.createContext();                  // create context and export it as named export

function ToastProvider({ children }) {                              // don't forget children!!!
  const [toasts, setToasts] = React.useState([]);

  const createToast = React.useCallback((variant, message) => {     // memoize any functions to avoid extra renders on pure components that consume the function
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    setToasts((currToasts) => [...currToasts, newToast]);           // use callback form of setState, otherwise will get stale values
  }, []);                                                           // since using callback form, no need to add anything to dependency array

  const dismissToast = React.useCallback((toastId) => {
    setToasts((currToasts) => {
      const nextToasts = currToasts.filter((toast) => toast.id !== toastId);
      return nextToasts;
    });
  }, []);

  const value = React.useMemo(() => {                               // memoize the value object so it doesn't get re-generated every single re-render, 
  return { toasts, createToast, dismissToast };                     // causing everything that consumes this Provider to re-render 
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>             // use the Provider here and wrap children
  );
}

export default ToastProvider;                                       // export the Provider component as default export
