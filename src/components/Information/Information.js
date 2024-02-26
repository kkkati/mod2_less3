import { store } from "../../store";
import {
  selectIsDraw,
  selectIsGameEnded,
  selectCurrentPlayer,
} from "../../selectors";
import { useSelector } from "react-redux";

export const InformationContainer = () => {
  return (
    <div>
      <InformationLayout />
    </div>
  );
};

const InformationLayout = () => {
  // const { isDraw, isGameEnded, currentPlayer } = store.getState();
  const currentPlayer = useSelector(selectCurrentPlayer);
  const isGameEnded = useSelector(selectIsGameEnded);
  const isDraw = useSelector(selectIsDraw);

  return (
    <div className="Information">
      <layout>
        {!isDraw
          ? isGameEnded
            ? `Победа ${currentPlayer}`
            : `Ходит: ${currentPlayer}`
          : "Ничья"}
      </layout>
    </div>
  );
};
