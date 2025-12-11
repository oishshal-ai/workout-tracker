// src/hooks/useWorkoutField.ts
import { useState, useEffect } from "react";
import type { Workout } from "../types/workout";

export function useWorkoutField<K extends keyof Workout>(
  formData: Workout,
  field: K,
  resetSignal: number,
  onChange: (field: K, value: Workout[K]) => void
) {
  const [localValue, setLocalValue] = useState<Workout[K]>(formData[field]);

  useEffect(() => {
    setLocalValue(formData[field]);
  }, [resetSignal, formData, field]);

  const updateValue = (value: Workout[K]) => {
    setLocalValue(value);
    onChange(field, value);
  };

  return { localValue, updateValue };
}