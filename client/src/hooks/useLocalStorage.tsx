import { useEffect, useState } from "react";

const PREFIX = "messenger-clone-";

const useLocalStorage = (key: string, initialValue?: string | Function) => {
  const prefixKey = PREFIX + key;
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(prefixKey);
    if (jsonValue != null) return JSON.parse(jsonValue);
    if (typeof initialValue === "function") return initialValue();
    else return initialValue;
  });

  useEffect(() => {
    value === undefined ? setValue("") : value;
    localStorage.setItem(prefixKey, JSON.stringify(value));
  }, [value, prefixKey]);

  return [value, setValue];
};

export default useLocalStorage;
