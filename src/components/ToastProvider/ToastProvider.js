import React from "react";
import Toast from "../Toast";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  React.useEffect(() => {
    function handleKeydown(event) {
      if (event.code === "Escape") {
        dismissAllToasts();
      }
    }

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const createToast = React.useCallback((variant, message) => {
    const newToast = {
      id: crypto.randomUUID(),
      variant: variant,
      message: message,
    };
    setToasts((currToasts) => [...currToasts, newToast]);
  }, []);

  const dismissToast = React.useCallback((toastId) => {
    setToasts((currToasts) => {
      const nextToasts = currToasts.filter((toast) => toast.id !== toastId);
      return nextToasts;
    });
  }, []);

  const dismissAllToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  const value = React.useMemo(() => {
    return { toasts, createToast, dismissToast, dismissAllToasts };
  }, [toasts]);

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
}

export default ToastProvider;
