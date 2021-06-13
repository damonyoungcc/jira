import { useEffect, useState } from "react";

export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
      delete result[key];
    }
  });
  return result;
};

export const isFalsy = (value: any) => (value === 0 ? false : !value);

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = (value: any, delay?: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 在上次useEffect执行完后，执行return，一般执行一些清理的任务
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
