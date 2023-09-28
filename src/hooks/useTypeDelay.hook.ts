import { useEffect } from "react";
import { useState } from "react";

const useTypeDelay = (
  fn: (data: string) => void,
  cleanup?: () => void,
  defaultDataValue = "",
  isOpen?: boolean
) => {
  const [data, setData] = useState<string>(defaultDataValue);

  useEffect(() => {
    const delayTimer = setTimeout(() => {
      if (data.trim() !== "") {
        fn(data);
      } else {
        if (cleanup) cleanup();
      }
    }, 500);

    return () => {
      clearTimeout(delayTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, isOpen]);

  useEffect(() => {
    setData(defaultDataValue);
  }, [defaultDataValue, isOpen]);

  return { setData, data };
};

export default useTypeDelay;
