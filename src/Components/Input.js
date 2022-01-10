import React, { useState } from "react";
import { connect } from "react-redux";

import { setNumberAction } from "../redux/actions";

const Input = (props) => {
  const [numberInput, setInputNumber] = useState("");

  const numberChangeHandler = (e) => {
    setInputNumber(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.setNumber(numberInput);
    setInputNumber("");
  };

  return (
    <div>
      <h1>Set Number</h1>
      <h2>{props.count}</h2>
      <form onSubmit={submitHandler}>
        <input type="text" onChange={numberChangeHandler} value={numberInput} />
        <button type="submit" value="Submit">
          set
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setNumber: (number) => {
      dispatch(setNumberAction(number));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
