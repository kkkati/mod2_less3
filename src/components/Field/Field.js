import styles from "./fiels.module.css";
import { store } from "../../store";
import { isWin } from "../../constant/check";
import { getIsDraw } from "../../constant/check";

export const FieldContainer = () => {
  return (
    <div>
      <FieldLayout />
    </div>
  );
};

const FieldLayout = () => {
  const { field, currentPlayer, isGameEnded, isDraw } = store.getState();
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
      store.dispatch({ type: "SET_FIELD", payload: updateField });
      console.log(updateField);

      //проверка победы
      if (isWin(updateField, currentPlayer) || isDraw) {
        store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
        return;
      }

      // проверка ничьи
      if (getIsDraw(updateField)) {
        store.dispatch({ type: "SET_IS_DRAW", payload: true });
        store.dispatch({ type: "SET_IS_GAME_ENDED", payload: true });
        return;
      }

      store.dispatch({ type: "SET_CURRENT_PLAYER" });
    }
  };

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
