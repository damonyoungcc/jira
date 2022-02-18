import React, { useEffect, useState } from "react";

/**
 * 初始化
 * render one 0
 * render two 0
 * effect 0
 *
 * 更新count
 * render one 1
 * render two 1
 * effect return 0 // 更新时，先清除上次的effect
 * effect 1
 *
 * 再次更新count
 * render one 2
 * render two 2
 * effect return 1 // 更新时，先清除上次的effect
 * effect 2
 *
 */

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  console.log("render one", count);

  useEffect(() => {
    console.log("effect", count);
    const timer = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
    return () => {
      console.log("effect return", count);
      return clearInterval(timer);
    };
  }, [count]);

  console.log("render two", count);

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </div>
  );
};
