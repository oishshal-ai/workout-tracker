import SwimSetsTable from "../Shared/SwimSetsTable";
import type { WorkoutSectionProps } from "../../types/props/workoutFields";
import { useWorkoutField } from "../../hooks/useWorkoutField";

export default function WaterPoloFields({ formData, onChange, resetSignal  }: WorkoutSectionProps) {
  const { localValue: swimSets, updateValue: updateSwimSets } =
      useWorkoutField(formData, "swimSets", resetSignal, onChange);
  
  return (
    <div>
      <SwimSetsTable
          items={swimSets ?? []}
          onChange={updateSwimSets}
          resetSignal={resetSignal}
        />
    </div>
  );
}
