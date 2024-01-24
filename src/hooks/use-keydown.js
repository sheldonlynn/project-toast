import React from "react";

function useEscapeKey(keyCode, callback) {
  React.useEffect(() => {
    function handleEvent(event) {
      if (event.code === keyCode) {
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
