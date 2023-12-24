export const InformationContainer = ({
  isDraw,
  isGameEnded,
  currentPlayer,
}) => {
  return (
    <div>
      <InformationLayout
        isDraw={isDraw}
        isGameEnded={isGameEnded}
        currentPlayer={currentPlayer}
      />
    </div>
  );
};
const InformationLayout = ({ isDraw, currentPlayer, isGameEnded }) => {
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
