import { useEffect } from "react";

const UseLocalStorage = (apiKey: string) => {
  useEffect(() => {
    try {
      window.localStorage.setItem("api-key", JSON.stringify(apiKey));
    } catch (error) {
      console.log(error);
    }
  }, [apiKey]);
};

export default UseLocalStorage;
