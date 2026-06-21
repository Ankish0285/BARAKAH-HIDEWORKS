import { useState, useEffect } from "react";
import { getStorageItem, setStorageItem } from "../utils/storage";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => getStorageItem(key, initialValue));

  useEffect(() => {
    setStorageItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
