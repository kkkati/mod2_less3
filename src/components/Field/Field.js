import styles from "./fiels.module.css";
export const FieldContainer = ({
  field,
  setField,
  currentPlayer,
  setCurrentPlayer,
}) => {
  const getPlayerAction = (event) => {
    setField((field[event.target.id] = currentPlayer));
    //field[event.target.id] = currentPlayer;
    console.log(field);
    if (currentPlayer == "X") {
      setCurrentPlayer("0");
    } else setCurrentPlayer("X");
  };
  return (
    <div>
      <FieldLayout field={field} getPlayerAction={getPlayerAction} />
    </div>
  );
};
const FieldLayout = ({ field, getPlayerAction }) => {
  return (
    <div className={styles.fieldContainer}>
      <div>
        {field.map((item, index) => {
          return (
            <button
              id={index}
              className={styles.fieldButton}
              onClick={getPlayerAction}
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};
