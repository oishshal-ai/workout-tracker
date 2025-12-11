import type { Workout } from "../workout";

export interface WorkoutSectionProps {
  formData: Workout;
  onChange: (field: keyof Workout, value: Workout[keyof Workout]) => void;
  resetSignal: number;
  isEditMode?: boolean;
}

export interface WorkoutTableProps<T> {
  items: T[];
  onChange: (items: T[]) => void;
  resetSignal: number;
}