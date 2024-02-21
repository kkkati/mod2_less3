import { store } from "../../store";

export const InformationContainer = () => {
  return (
    <div>
      <InformationLayout />
    </div>
  );
};

const InformationLayout = () => {
  const { isDraw, isGameEnded, currentPlayer } = store.getState();
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
