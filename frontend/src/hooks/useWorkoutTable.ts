import { useState, useEffect } from "react";

export function useWorkoutTable<T>(
  items: T[],
  resetSignal: number,
  onChange: (items: T[]) => void
) {
  const [localItems, setLocalItems] = useState<T[]>(items);

  useEffect(() => {
    setLocalItems(items);
  }, [resetSignal, items]);

  const updateItem = (index: number, updatedItem: T) => {
    const updated = [...localItems];
    updated[index] = updatedItem;
    setLocalItems(updated);
    onChange(updated);
  };

  const addItem = (newItem: T) => {
    const updated = [...localItems, newItem];
    setLocalItems(updated);
    onChange(updated);
  };

  const removeItem = (index: number) => {
    const updated = localItems.filter((_, i) => i !== index);
    setLocalItems(updated);
    onChange(updated);
  };

  return { localItems, updateItem, addItem, removeItem };
}
