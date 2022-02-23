import { UseEffect } from "./effect";
import { UseRef, UseRef1, UseRef2, UseState1 } from "./ref";
import { App2, Refapp } from "./lazy";
import { UseReducer } from "./useReducer";
import { Loop } from "./loop";

const Demo = () => {
  return (
    <ul>
      {/*       <li>
        <UseEffect />
      </li> */}
      <li>
        <UseState1 />
      </li>
      {/*       <li>
        <UseReducer />
      </li> */}
      {/*       <li>
        <App2 />
      </li> */}
      {/*       <li>
        <Refapp />
      </li>
      <li>
        <Loop />
      </li> */}
      <div style={{ height: "300px" }}></div>
    </ul>
  );
};

export default Demo;
