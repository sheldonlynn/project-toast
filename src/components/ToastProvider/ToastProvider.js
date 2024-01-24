import React from "react";
import Toast from "../Toast";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToast = React.useCallback((variant, message) => {
    const nextToast = (
      <Toast
        message={message}
        handleDismiss={dismissToast}
        variant={variant}
        id={crypto.randomUUID()}
      >
        {message}
      </Toast>
    );
    setToasts((currToasts) => [...currToasts, nextToast]);
  }, []);

  const dismissToast = React.useCallback((toastId) => {
    setToasts((currToasts) => {
      const nextToasts = currToasts.filter(
        (toast) => toast.props.id !== toastId
      );
      return nextToasts;
    });
  }, []);

  const value = React.useMemo(() => {
    return { toasts, addToast, dismissToast };
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
