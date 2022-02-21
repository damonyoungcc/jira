import React, { useEffect, useState } from "react";

export const UseEffect = () => {
  const [count, setCount] = useState(0);
  console.log("render one", count);

  useEffect(() => {
    console.log("effect setInterval", count);
    const timer = setInterval(() => {
      console.log("num in setInterval ", count);
    }, 3000);
    return () => {
      console.log("effect setInterval return", count);
      return clearInterval(timer);
    };
    // 1. 这里不指定依赖，则所有state更新都会执行这个effect，因为count值打印最新，不会形成闭包
    // 2. 这里指定空数组依赖，则在页面加载时执行effect，定时器中记住的第一次count值，后续更新则依然打印初始值
    // 3. 这里指定count值，就不会形成闭包，setInterval里面永远打印count最新值
  }, []);

  useEffect(() => {
    console.log("effect", count);
    return () => {
      console.log("卸载值", count);
    };
    // 这里不指定依赖，则清除effect的时候，则会形成闭包，打印的就是count初始值
  }, []);

  console.log("render two", count);

  return (
    <div>
      <p>You click {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </div>
  );
};

// 闭包的函数例子

// const test = () => {
//   let num = 0;
//   const effect = () => {
//     num += 1;
//     const message = `现在的num值：${num}`;
//     return function unmount() {
//       console.log(message);
//     };
//   };
//   return effect;
// };

// const add = test();
// const unmount = add();

// add();
// add();
// unmount();
