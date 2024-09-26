import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function useAsyncStore<S>(key: string, initialValue: S) {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
      async function load() {
          const value = await AsyncStorage.getItem(key);
          if (value) {
              setState(JSON.parse(value));
            }
        }
        load();
  }, [key]);

  const storeState = async (value: S) => {
    setState(value);
    await AsyncStorage.setItem(key, JSON.stringify(value));
  };

  return [state, storeState] as const;
  
}