import { useWorkoutField } from "../../hooks/useWorkoutField";
import type { WorkoutSectionProps } from "../../types/props/workoutFields";
import StrengthTable from "./StrengthTable";

export default function StrengthFields({ formData, onChange, resetSignal }: WorkoutSectionProps) {
  const { localValue: exercises, updateValue: updateExercises } =
    useWorkoutField(formData, "exercises", resetSignal, onChange);

  return (
    <div>
      <h3>Strength Workout</h3>
      <StrengthTable items={exercises ?? []} resetSignal={resetSignal} onChange={updateExercises} />
    </div>
  );
}