import { useEffect, useRef, useState } from "react";

export const cleanObject = (object: { [k: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const isFalsy = (value: any) => (value === 0 ? false : !value);
export const isVoid = (value: unknown) =>
  value === undefined || value === null || value === "";

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 在上次useEffect执行完后，执行return，一般执行一些清理的任务
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    clear: () => setValue([]),
    removeIndex: (index: number) => {
      const copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
    add: (item: T) => setValue([...value, item]),
  };
};

export const useDocumentTitle = (
  title: string,
  keepOnUmmount: boolean = true
) => {
  const oldTitle = useRef(document.title).current;
  useEffect(() => {
    document.title = title;
  }, [title]);

  useEffect(() => {
    return () => {
      if (!keepOnUmmount) {
        document.title = oldTitle;
      }
    };
  }, [oldTitle, keepOnUmmount]);
};

export const resetRoute = () => {
  window.location.href = window.location.origin;
};
