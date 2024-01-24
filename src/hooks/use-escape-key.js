import React from "react";

function useEscapeKey(callback) {
  React.useEffect(() => {
    function handleEvent(event) {
      if (event.code === "Escape") {
        callback(event);
      }
    }

    window.addEventListener("keydown", handleEvent);

    return () => {
      window.removeEventListener("keydown", handleEvent);
    };
  }, [callback]);
}

export default useEscapeKey;
