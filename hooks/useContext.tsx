import React, { createContext, PropsWithChildren } from "react";
import useAsyncStore from "./useAsyncStore";
import { Chord } from "../data";

interface ContextValues {
  favorites: Chord[];
  setFavorites: (chords: Chord[]) => void;
}

export const GlobalContext = createContext<ContextValues>({} as ContextValues);

export default function FavoritesProvider(props: PropsWithChildren) {
  const [favorites, setFavorites] = useAsyncStore<Chord[]>("favorites", []);

  return (
    <GlobalContext.Provider value={{ favorites, setFavorites }}>
      {props.children}
    </GlobalContext.Provider>
  );
}
