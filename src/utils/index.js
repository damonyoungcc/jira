import { useEffect, useState } from "react";

export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

export const isFalsy = (value) => (value === 0 ? false : !value);

export const useMount = (callback) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    // 在value变化后，设置一个定时器
    const timeout = setTimeout(() => setDebouncedValue(value), delay);
    // 在上次useEffect执行完后，执行return，一般执行一些清理的任务
    return () => clearTimeout(timeout);
  }, [value, delay]);
  return debouncedValue;
};
