import { WIN_PATTERNS } from "../constant/win-pattern";

export const isWin = (field, currentPlayer) =>
  WIN_PATTERNS.some((pattern) =>
    pattern.every((i) => field[i] === currentPlayer)
  );

export const getIsDraw = (field) => {
  return !field.includes("");
};
