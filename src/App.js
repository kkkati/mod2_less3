import { FieldContainer } from "./components/Field/Field";
import { InformationContainer } from "./components/Information/Information";
import styles from "./App.module.css";
import { useState } from "react";
import { isWin } from "./constant/check";
import { getIsDraw } from "./constant/check";
import PropTypes from "prop-types";
import { initialField } from "./constant/initialField";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);

  const [field, setField] = useState(initialField);

  const getPlayerAction = (event) => {
    if (field[event.target.id] == "" && isGameEnded == false) {
      const updateField = field.map((item, i) => {
        if (i == event.target.id) {
          return (item = currentPlayer);
        }
        return item;
      });
      setField(updateField);

      //проверка победы
      if (isWin(updateField, currentPlayer) || isDraw) {
        setIsGameEnded(true);
        return;
      }

      // проверка ничьи
      if (getIsDraw(updateField)) {
        setIsDraw(true);
        setIsGameEnded(true);
        return;
      }

      //меняет текущего игрока
      if (currentPlayer == "X" && isGameEnded == false && isDraw == false) {
        setCurrentPlayer("0");
      } else if (currentPlayer == "0" && isGameEnded == false)
        setCurrentPlayer("X");
    }
  };

  const startAgain = () => {
    setCurrentPlayer("X");
    setIsGameEnded(false);
    setIsDraw(false);
    setField(initialField);
  };

  return (
    <GameLayout
      field={field}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      getPlayerAction={getPlayerAction}
      startAgain={startAgain}
    ></GameLayout>
  );
};

const GameLayout = ({
  field,
  isDraw,
  isGameEnded,
  currentPlayer,
  setField,
  setCurrentPlayer,
  setIsGameEnded,
  setIsDraw,
  startAgain,
  getPlayerAction,
}) => {
  return (
    <div className={styles.game}>
      <InformationContainer
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      ></InformationContainer>
      <FieldContainer
        field={field}
        setField={setField}
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
        getPlayerAction={getPlayerAction}
      ></FieldContainer>
      <button className={styles.newGame} onClick={startAgain}>
        Начать заново
      </button>
    </div>
  );
};

GameLayout.PropType = {
  field: PropTypes.bool,
  setField: PropTypes.func,
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.func,
  startAgain: PropTypes.func,
  getPlayerAction: PropTypes.func,
};

export default Game;
