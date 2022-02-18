import { useReducer } from "react";

interface State {
  count: number;
}

const initialState = { count: 0 };

const reducer = (state: State, action: { type: string }) => {
  switch (action.type) {
    case "+":
      return { count: state.count + 1 };
    case "-":
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
};

export const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "+" })}>+</button>
      <button onClick={() => dispatch({ type: "-" })}>-</button>
    </div>
  );
};
