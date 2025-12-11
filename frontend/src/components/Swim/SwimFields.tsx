import SwimSetsTable from "../Shared/SwimSetsTable";
import type { WorkoutSectionProps } from "../../types/props/workoutFields";
import { useWorkoutField } from "../../hooks/useWorkoutField";

export default function SwimFields({ formData, onChange, resetSignal }: WorkoutSectionProps) {
  const { localValue: totalDistance, updateValue: updateTotalDistance } = useWorkoutField(formData, "totalDistance", resetSignal, onChange);
  const { localValue: swimSets, updateValue: updateSwimSets } =
    useWorkoutField(formData, "swimSets", resetSignal, onChange);

  return (
    <div>
      <div>
        <label>Total Distance (m):</label>
        <input
          type="number"
          value={totalDistance || 0}
          onChange={(e) => updateTotalDistance(Number(e.target.value))}
        />
      </div>
      <SwimSetsTable
        items={swimSets ?? []}
        onChange={updateSwimSets}
        resetSignal={resetSignal}
      />
    </div>
  );
}
