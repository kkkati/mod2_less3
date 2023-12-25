import PropTypes from "prop-types";

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

InformationContainer.Prototype = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
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
InformationLayout.Prototype = {
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
  currentPlayer: PropTypes.string,
};
