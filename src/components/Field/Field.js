import styles from "./fiels.module.css";
import PropTypes from "prop-types";

export const FieldContainer = ({ field, getPlayerAction }) => {
  return (
    <div>
      <FieldLayout field={field} getPlayerAction={getPlayerAction} />
    </div>
  );
};

FieldContainer.PropType = {
  field: PropTypes.bool,
  getPlayerAction: PropTypes.func,
};

const FieldLayout = ({ field, getPlayerAction }) => {
  return (
    <div>
      <div className={styles.fieldContainer}>
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
