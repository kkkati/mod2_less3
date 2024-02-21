import { initialState } from "./store";

export const appReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_FIELD": {
      return {
        ...state,
        field: payload,
      };
    }
    case "SET_CURRENT_PLAYER": {
      return {
        ...state,
        currentPlayer: state.currentPlayer === "X" ? "0" : "X",
      };
    }
    case "SET_IS_GAME_ENDED": {
      return {
        ...state,
        isGameEnded: payload,
      };
    }
    case "SET_IS_DRAW": {
      return {
        ...state,
        isDraw: payload,
      };
    }
    case "RESET": {
      return initialState;
    }
    default:
      return state;
  }
};
