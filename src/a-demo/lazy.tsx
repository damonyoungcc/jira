import React, { useRef, useState } from "react";

export function App() {
  console.log("start");
  // 惰性初始state，传入一个函数，在函数中计算并返回初始的state
  const [lazyValue, setLazyValue] = useState(() => {
    console.log("init lazy");
    return "I am lazy";
  });

  console.log(lazyValue);

  return (
    <div>
      <button
        onClick={() =>
          setLazyValue(() => {
            return "updated lazy value";
          })
        }
      >
        setcallback
      </button>
      <div></div>
    </div>
  );
}

export function App1() {
  console.log("start");
  // 惰性初始state，传入一个函数，在函数中计算并返回初始的state
  const [callback, setCallback] = useState(() => () => {
    alert("init");
  });

  console.log("render", callback);

  return (
    <div>
      <button
        onClick={() => setCallback(() => () => alert("updated lazy value"))}
      >
        setcallback
      </button>
      <button onClick={callback}>call callback</button>
      <div></div>
    </div>
  );
}

export function App2() {
  console.log("start");
  const callbackRef = useRef(() => alert("init"));
  const callback = callbackRef.current;

  console.log(callback);

  return (
    <div>
      <button
        onClick={() => {
          // 重新指定callbackRef的current并不会造成组件重新渲染，因此此时callback依然会初始值
          callbackRef.current = () => alert("updated!");
          console.log(callbackRef.current);
        }}
      >
        setcallback
      </button>
      <button onClick={callback}>call callback</button>
      {/* 这里并不会打印updated，因为从读current的值，只会在第一次渲染时发生，后续更新后，就不会再次读取最新的值 */}
      <button onClick={callbackRef.current}>like real call callback</button>
      {/* 想要实现更新后的alert，就必须调用callbackRef.current() */}
      <button onClick={() => callbackRef.current()}>real callback</button>
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
