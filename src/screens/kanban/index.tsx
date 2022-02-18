import { UseEffect } from "./effect";
import { UseReducer } from "./useReducer";

export const KanbanScreen = () => {
  return (
    <div>
      <ul>
        <li>
          <UseEffect />
        </li>
        <li>
          <UseReducer />
        </li>
      </ul>
    </div>
  );
};
