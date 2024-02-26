import { FieldContainer } from "./components/Field/Field";
import { InformationContainer } from "./components/Information/Information";
import styles from "./App.module.css";
import { useEffect, useState } from "react";
import { store } from "./store";
import { useDispatch } from "react-redux";

const Game = () => {
  // const [supp, setSupp] = useState();
  // useEffect(() => {
  //   store.subscribe(() => setSupp(Date.now()));
  // }, []);
  const dispatch = useDispatch();

  const startAgain = () => {
    // store.dispatch({ type: "RESET" });
    dispatch({ type: "RESET" });
  };

  return <GameLayout startAgain={startAgain}></GameLayout>;
};

const GameLayout = ({ startAgain }) => {
  return (
    <div className={styles.game}>
      <InformationContainer></InformationContainer>
      <FieldContainer></FieldContainer>
      <button className={styles.newGame} onClick={startAgain}>
        Начать заново
      </button>
    </div>
  );
};

export default Game;
