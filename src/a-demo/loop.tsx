import { useEffect, useState, useMemo } from "react";

export const Loop = () => {
  const [obj] = useState({ name: 1 });

  const [num, setNum] = useState(0);

  useEffect(() => {
    setNum(num + 1);
  }, [obj]);

  return (
    <div>
      <h1>{num}</h1>
    </div>
  );
};
