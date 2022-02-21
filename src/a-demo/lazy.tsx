import React, { useRef, useState } from "react";

export function App() {
  const [callback, setCallback] = useState(() => () => {
    console.log("I am lazy");
  });
  console.log(callback);

  return (
    <div>
      <button
        onClick={() =>
          setCallback(() => () => console.log("updated lazyValue"))
        }
      >
        setCallback
      </button>
      <button onClick={callback}>call callback</button>
      <div>Hello World</div>
    </div>
  );
}

export function Refapp() {
  const callbackRef = useRef(() => console.log("init ref value"));
  const callback = callbackRef.current;
  console.log(callback);
  return (
    <div>
      <button
        onClick={() =>
          (callbackRef.current = () => console.log("updated ref value"))
        }
      >
        setCallback
      </button>
      <button onClick={() => callbackRef.current()}>call callback</button>
      <div>Hello World</div>
    </div>
  );
}
