import React from "react";
import { connect } from "react-redux";
import { incrementAction } from "../redux/actions";

const ButtonIncrement = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.count}</h1>
      <button onClick={props.increment}>+</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch(incrementAction),
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonIncrement);
