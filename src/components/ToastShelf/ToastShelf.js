import React from "react";

import { ToastContext } from "../ToastProvider";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
      {toasts?.map(({ id, message, variant }) => {
        return (
          <li key={id} className={styles.toastWrapper}>
            <Toast message={message} variant={variant} id={id}>
              {message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
