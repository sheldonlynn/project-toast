import React from "react";

import { ToastContext } from "../ToastProvider";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map((toast, index) => {
        return (
          <li key={index} className={styles.toastWrapper}>
            {toast}
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
