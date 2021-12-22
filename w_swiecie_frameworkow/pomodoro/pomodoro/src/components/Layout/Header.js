import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";

// import classes from "./Header.module.css";
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
      <div className="header">
        <div className="container">
          <nav id="navbar">
            <div className="navi-main">
              <div id="nav-logo">
                <span className="text-base">pomod’</span>
                <span className="text-bold">oro</span>
              </div>
              <ul>
                <li className="link">
                  <div className="a-link-disabled">
                    <span className="text-base">report</span>
                  </div>
                </li>

                <li className="link">
                  <div className="a-link" onClick={onHShowModalHandler}>
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
          <div className="modal-container">
            <div className="every-input">
              <span className="label-input">Pomod'oro minutes amount:</span>
              <InputNumber
                type="number"
                min="1"
                max="120"
                value={pomodoroInMinutes}
                onChange={pomodoroValueChangeHandler}
              />
            </div>

            <div className="every-input">
              <span className="label-input">Small break minutes amount:</span>
              <InputNumber
                type="number"
                min="1"
                max="120"
                value={shortBreakInMinutes}
                onChange={shortBreakValueChangeHandler}
              />
            </div>

            <div className="every-input">
              <span className="label-input">Long break minutes amount:</span>
              <InputNumber
                type="number"
                min="1"
                max="120"
                value={LongBreakInMinutes}
                onChange={longBreakValueChangeHandler}
              />
            </div>

            <div className="a-link-modal">
              <span className="text-base" onClick={onHideModalHandler}>
                close
              </span>
            </div>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

export default Header;
