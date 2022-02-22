import { UseEffect } from "./effect";
import { UseRef } from "./ref";
import { App, Refapp } from "./lazy";
import { UseReducer } from "./useReducer";
import { Loop } from "./loop";

const Demo = () => {
  return (
    <ul>
      <li>
        <UseEffect />
      </li>
      <li>
        <UseRef />
      </li>
      <li>
        <UseReducer />
      </li>
      <li>
        <App />
      </li>
      <li>
        <Refapp />
      </li>
      <li>
        <Loop />
      </li>
      <div style={{ height: "300px" }}></div>
    </ul>
  );
};

export default Demo;
