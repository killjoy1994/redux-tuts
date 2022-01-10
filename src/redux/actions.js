export const incrementAction = {
  type: "counter/increment",
};

export const decrementAction = {
  type: "counter/decrement",
};

export const setNumberAction = (number) => {
  return {
    type: "counter/set-number",
    payload: number,
  };
};
