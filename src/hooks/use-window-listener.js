import React from "react";

function useWindowListener(event, trigger, callback) {
  React.useEffect(() => {
    function handleEvent(event) {
      if (event.type === "keydown") {
        if (event.code === trigger) {
          callback(event);
        }
      }
    }

    window.addEventListener(event, handleEvent);

    return () => {
      window.removeEventListener(event, handleEvent);
    };
  }, []);

  return [];
}

export default useWindowListener;
