import { useEffect, useRef, useState } from "react";

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  console.log(document.title);
  const oldTitle = useRef(document.title).current;
  console.log(oldTitle);

  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUnmount) {
        document.title = oldTitle;
        console.log("卸载", document.title);
      }
    };
  }, [keepOnUnmount, oldTitle]);
};

export const UseRef = () => {
  const intervalRef = useRef<number>();
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("two", intervalRef.current);
    const id = setInterval(() => {});
    intervalRef.current = id;
    return () => {
      console.log("three", intervalRef.current);
      clearInterval(intervalRef.current);
    };
  });
  console.log("one", intervalRef.current);
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
