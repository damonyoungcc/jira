import { useState } from "react";

export const useUndo = <T>(initialPresent: T) => {
  const [past, setPast] = useState<T[]>([]);
  const [present, setPresent] = useState(initialPresent);
  const [future, setFuture] = useState<T[]>([]);

  // 能否撤销，就看过去的长度是否不为0
  const canUndo = past.length !== 0;
  const canRedo = future.length !== 0;

  const undo = () => {
    // 不能撤销，就是past的长度为0
    if (!canUndo) {
      return;
    }

    // 把上一个从past中取出来，就是现在的值
    const previous = past[past.length - 1];
    // 新的past，就把最后一位删除
    const newPast = past.slice(0, past.length - 1);

    // 重新设置past
    setPast(newPast);
    // 设置当前值
    setPresent(previous);
    // 设置当前值为第一个未来值
    setFuture([present, ...future]);
  };

  const redo = () => {
    if (!canRedo) return;

    const next = future[0];
    const newFuture = future.slice(1);

    setPast([...past, present]);
    setPresent(next);
    setFuture(newFuture);
  };

  const set = (newPresent: T) => {
    if (newPresent === present) {
      return;
    }
    setPast([...past, present]);
    setPresent(newPresent);
    setFuture([]);
  };
};
