import React from "react";
import { Actions } from "./actions";
import { initialState, stateInterface } from "./state";

export const MusicContext = React.createContext<{
  state: stateInterface;
  dispatch: React.Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => undefined,
});
