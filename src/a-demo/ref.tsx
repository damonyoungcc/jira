import { useEffect, useMemo, useRef, useState } from "react";

export const useDocumentTitle = (
  title: string,
  keepOnUnmount: boolean = true
) => {
  console.log(document.title);
  // 这里存在ref后，无论document.title怎么变化，ref的current都不会更改
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

export const UseRef1 = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(count);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export const UseRef2 = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);
  countRef.current = count;

  useEffect(() => {
    const timerId = setTimeout(() => {
      console.log(countRef.current);
    }, 3000);
    return () => {
      clearTimeout(timerId);
    };
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export const UseState1 = () => {
  const [source, setSource] = useState([
    {
      type: "done",
      value: 1,
    },
    {
      type: "doing",
      value: 2,
    },
  ]);
  const doneSource = useMemo(
    () => source.filter((item) => item.type === "done"),
    [source]
  );
  const doingSource = useMemo(
    () => source.filter((item) => item.type === "doing"),
    [source]
  );

  console.log(doneSource);
  console.log(doingSource);

  return (
    <div>
      <button
        onClick={() =>
          setSource([
            {
              type: "done",
              value: 1,
            },
            {
              type: "doing",
              value: 2,
            },
            {
              type: "done",
              value: 3,
            },
            {
              type: "doing",
              value: 4,
            },
          ])
        }
      >
        set source
      </button>
    </div>
  );
};
