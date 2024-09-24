import { createContext } from "react";

interface ContextValue {
  likedChords: {};
}

export const FavoritesContext = createContext<ContextValue>({} as ContextValue);
