import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

// Modifierad hook för att hantera AsyncStorage med nyckelvärden
export default function useAsyncStore<S>(key: string, initialValue: S) {
  const [state, setState] = useState(initialValue);

  // Ladda data från AsyncStorage
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

  const clearStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (e) {
    console.log('Fel vid rensning av AsyncStorage:', e);
  }
};

  return [state, storeState, clearStorage] as const;
  
}
