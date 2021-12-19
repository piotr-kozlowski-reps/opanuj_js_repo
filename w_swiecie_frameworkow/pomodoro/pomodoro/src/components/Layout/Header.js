import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

import classes from "./Header.module.css";
import Modal from "../UI/Modal";
import InputNumber from "../UI/InputNumber";
import { settingActions } from "../../store/settings-slice";
import useInput from "../../hooks/use-input";

const Header = () => {
  //
  //vars
  const dispatch = useDispatch();

  //
  const pomodoroTimeAmount = useSelector((state) => {
    return state.settings.pomodoroTimeAmount;
  });
  const pomodoroInMinutes = pomodoroTimeAmount.getMinutes();

  //
  const shortBreakTimeAmount = useSelector(
    (state) => state.settings.shortBreakTimeAmount
  );
  const shortBreakInMinutes = shortBreakTimeAmount.getMinutes();

  //
  const longBreakTimeAmount = useSelector(
    (state) => state.settings.longBreakTimeAmount
  );
  const LongBreakInMinutes = longBreakTimeAmount.getMinutes();

  const isModalVisible = useSelector((state) => state.settings.isModalVisible);

  //
  //func
  const pomodoroValueChangeHandler = (event) => {
    const valueInMinutes = parseInt(event.target.value);
    dispatch(settingActions.setPomodoroTimeAmount(valueInMinutes));
  };

  const shortBreakValueChangeHandler = (event) => {
    const valueInMinutes = parseInt(event.target.value);
    dispatch(settingActions.setShortBreakTimeAmount(valueInMinutes));
  };

  const longBreakValueChangeHandler = (event) => {
    const valueInMinutes = parseInt(event.target.value);
    dispatch(settingActions.setLongBreakTimeAmount(valueInMinutes));
  };

  const onHideModalHandler = () => {
    console.log("onHideCartHandler");
    dispatch(settingActions.setIsModalVisibleToFalse());
  };

  const onHShowModalHandler = () => {
    console.log("onHShowModalHandler");
    dispatch(settingActions.setIsModalVisibleToTrue());
  };

  return (
    <Fragment>
      <div className={classes.header}>
        <div className="container">
          <nav id={classes.navbar}>
            <div className={classes["navi-main"]}>
              <div id={classes["nav-logo"]}>
                <span className="text-base">pomod’</span>
                <span className="text-bold">oro</span>
              </div>
              <ul>
                <li className={classes.link}>
                  <div className={classes["a-link-disabled"]}>
                    <span className="text-base">report</span>
                  </div>
                </li>

                <li className={classes.link}>
                  <div
                    className={classes["a-link"]}
                    onClick={onHShowModalHandler}
                  >
                    <span className="text-base">settings</span>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>

      {isModalVisible && (
        <Modal onHideCart={onHideModalHandler}>
          <div className={classes["modal-container"]}>
            <div className={classes["every-input"]}>
              <span className={classes["label-input"]}>
                Pomod'oro minutes amount:
              </span>
              <InputNumber
                type="number"
                min="1"
                max="120"
                value={pomodoroInMinutes}
                onChange={pomodoroValueChangeHandler}
              />
            </div>

            <div className={classes["every-input"]}>
              <span className={classes["label-input"]}>
                Small break minutes amount:
              </span>
              <InputNumber
                type="number"
                min="1"
                max="120"
                value={shortBreakInMinutes}
                onChange={shortBreakValueChangeHandler}
              />
            </div>

            <div className={classes["every-input"]}>
              <span className={classes["label-input"]}>
                Long break minutes amount:
              </span>
              <InputNumber
                type="number"
                min="1"
                max="120"
                value={LongBreakInMinutes}
                onChange={longBreakValueChangeHandler}
              />
            </div>

            <div className={classes["a-link-modal"]}>
              <span className="text-base" onClick={onHideModalHandler}>
                close
              </span>
            </div>

            {/* {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent} */}
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default Header;
