import { appReducer } from "./reducer";
import { createStore } from "redux";
import { initialField } from "./constant/initialField";

export const initialState = {
  field: initialField,
  currentPlayer: "X",
  isGameEnded: false,
  isDraw: false,
};

export const store = createStore(appReducer, initialState);
