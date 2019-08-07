import { useState, useCallback } from "react";

const useInput = (initialValue: any = "") => {
  const [value, setter] = useState(initialValue);
  const handler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setter(value);
  }, []);

  return [value, handler];
};

export default useInput;
