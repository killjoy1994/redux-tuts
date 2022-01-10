import React from "react";
import { connect } from "react-redux";

import { decrementAction } from "../redux/actions";

const ButtonDecrement = (props) => {
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.decrement}>-</button>
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
    decrement: (counter) => dispatch(decrementAction),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ButtonDecrement);
