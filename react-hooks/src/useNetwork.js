import { useState, useEffect } from 'react';

const useNetwork = (onChange) => {
    // navigator를 통해서 웹사이트가 온라인인지 아닌지 true/false로 반환해준다.
    const [status, setStatus] = useState(navigator.onLine);
    const handleChange = () => {
      if (typeof onChange === "function") {
        onChange(navigator.onLine);
      }
      setStatus(navigator.onLine);
    };
    useEffect(() => {
      window.addEventListener("online", handleChange);
      window.addEventListener("offline", handleChange);
      // eslint-disable-next-line no-unused-expressions
      () => {
        window.removeEventListener("online", handleChange);
        window.removeEventListener("offline", handleChange);
      };
    }, []);
    return status;
};

export default useNetwork;