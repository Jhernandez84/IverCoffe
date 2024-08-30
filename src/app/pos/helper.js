import { useState } from "react";

const useItemHandler = () => {
  const [initialQty, setInitialQty] = useState(0);

  const addItem = () => {
    setInitialQty(initialQty + 1);
  };

  const reduceItem = () => {
    setInitialQty((prevQty) => Math.max(prevQty - 1, 0)); // Prevents negative quantity
  };

  const removeItem = () => {
    setInitialQty(0);
  };

  return {
    initialQty,
    addItem,
    reduceItem,
    removeItem,
  };
};

export default useItemHandler;
