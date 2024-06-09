import { useEffect, useState } from "react";

const UseLocalStorage = () => {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    try {
      window.localStorage.setItem("api-key", JSON.stringify(apiKey));
    } catch (error) {
      console.log(error);
    }
  }, [apiKey, setApiKey]);

  return { apiKey, setApiKey };
};

export default UseLocalStorage;
