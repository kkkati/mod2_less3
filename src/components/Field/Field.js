import styles from "./fiels.module.css";
import { store } from "../../store";
import { isWin } from "../../constant/check";
import { getIsDraw } from "../../constant/check";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCurrentPlayer,
  selectField,
  selectIsDraw,
  selectIsGameEnded,
} from "../../selectors";

export const FieldContainer = () => {
  // const { field, currentPlayer, isGameEnded, isDraw } = store.getState();
  const field = useSelector(selectField);
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);
  const dispatch = useDispatch();

  const getPlayerAction = (index) => {
    if (isGameEnded || isDraw) return;

    console.log(currentPlayer);
    if (field[index] == "" && isGameEnded == false) {
      const updateField = field.map((item, i) => {
        if (i == index) {
          return (item = currentPlayer);
        }
        return item;
      });
      // store.dispatch({ type: "SET_FIELD", payload: updateField });
      dispatch({ type: "SET_FIELD", payload: updateField });

      //проверка победы
      if (isWin(updateField, currentPlayer) || isDraw) {
        // store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
        dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
        return;
      }

      // проверка ничьи
      if (getIsDraw(updateField)) {
        // store.dispatch({ type: "SET_IS_DRAW", payload: true });
        dispatch({ type: "SET_IS_DRAW", payload: true });
        // store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
        dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
        return;
      }

      // store.dispatch({ type: "SET_CURRENT_PLAYER" });
      dispatch({ type: "SET_CURRENT_PLAYER" });
    }
  };
  return (
    <div>
      <FieldLayout getPlayerAction={getPlayerAction} field={field} />
    </div>
  );
};

const FieldLayout = ({ getPlayerAction, field }) => {
  return (
    <div>
      <div className={styles.fieldContainer}>
        {field.map((item, index) => {
          return (
            <button
              id={index}
              key={index}
              className={styles.fieldButton}
              onClick={() => getPlayerAction(index)}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
