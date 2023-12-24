import { FieldContainer } from "./components/Field/Field";
import { InformationContainer } from "./components/Information/Information";
import styles from "./App.module.css";
import { useState } from "react";

const Game = () => {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  // const field = ["", "", "", "", "", "", "", "", ""];
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  return (
    <GameLayout
      field={field}
      isDraw={isDraw}
      isGameEnded={isGameEnded}
      currentPlayer={currentPlayer}
      setField={setField}
      setCurrentPlayer={setCurrentPlayer}
      setIsGameEnded={setIsGameEnded}
      setIsDraw={setIsDraw}
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
      ></FieldContainer>
      <button className={styles.newGame}>Начать заново</button>
    </div>
  );
};

export default Game;
