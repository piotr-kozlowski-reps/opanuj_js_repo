import React, { useState, useContext, useEffect } from "react";

import AppContext from "../../store/app-context";
import classes from "./Header.module.css";

const Header = (props) => {
  //
  //vars
  const ctx = useContext(AppContext);

  const [inputValue, setInputValue] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  const enteredInputIsValid = inputValue.trim() !== "";
  const enteredInputIsInvalid = !enteredInputIsValid && isInputTouched;

  const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);

  const inputClasses = enteredInputIsInvalid ? `${classes.invalid}` : ``;
  const pokemonsInPokedexAmount = props.pokedexContent.length;
  const btnClasses = `${classes["showpokedex-button"]} ${
    buttonIsHighlighted ? classes.bump : ""
  }`;

  //
  //func
  const inputValueChangeHandler = (event) => {
    setInputValue(event.target.value);
    setIsInputTouched(false);
  };

  // const inputBlurHandler = (event) => {
  //   setIsInputTouched(true);
  // };

  const formSubmissionHandler = (event) => {
    event.preventDefault();
    setIsInputTouched(true);

    if (!enteredInputIsValid) {
      return;
    }

    props.onFetchRequest(inputValue);

    setInputValue("");
    setIsInputTouched(false);
  };

  //
  //effects
  useEffect(() => {
    setButtonIsHighlighted(true);

    const timer = setTimeout(() => {
      setButtonIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [props.pokedexContent]);

  //
  //jsx
  return (
    <header>
      <div className={classes["showpokedex-div"]}>
        <button onClick={ctx.toggleIsShowPokedex} className={btnClasses}>
          {ctx.isShowPokedex
            ? `Schowaj Pokedex  (${pokemonsInPokedexAmount})`
            : `Pokaz Pokedex  (${pokemonsInPokedexAmount})`}
        </button>
      </div>
      <h4>Jakiego pokemona szukasz:</h4>
      <form className={classes.form} onSubmit={formSubmissionHandler}>
        <input
          onChange={inputValueChangeHandler}
          // onBlur={inputBlurHandler}
          value={inputValue}
          className={inputClasses}
        />
        <button type="submit">></button>
        {enteredInputIsInvalid && (
          <p className={classes["invalid-p"]}>Pole nie może być puste.</p>
        )}
      </form>
    </header>
  );
};

export default Header;
