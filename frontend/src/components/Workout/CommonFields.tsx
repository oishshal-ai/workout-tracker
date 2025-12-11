import type { Workout } from "../../types/workout";
import { useWorkoutField } from "../../hooks/useWorkoutField";
import type { WorkoutSectionProps } from "../../types/props/workoutFields";
import { clearTypeSpecificFields } from "../../utils/workoutUtils";

export default function CommonFields({ formData, onChange, resetSignal, isEditMode }: WorkoutSectionProps) {
  const { localValue: type } = useWorkoutField(formData, "type", resetSignal, onChange);
  const { localValue: date, updateValue: updateDate } = useWorkoutField(formData, "date", resetSignal, onChange);
  const { localValue: startTime, updateValue: updateStartTime } = useWorkoutField(formData, "startTime", resetSignal, onChange);
  const { localValue: endTime, updateValue: updateEndTime } = useWorkoutField(formData, "endTime", resetSignal, onChange);
  const { localValue: calories, updateValue: updateCalories } = useWorkoutField(formData, "calories", resetSignal, onChange);

  const handleTypeChange = (nextType: Workout["type"]) => {
    const clearedForm = clearTypeSpecificFields(formData, nextType);

    // Push updates back up
    onChange("type", clearedForm.type);
    onChange("swimSets", clearedForm.swimSets);
    onChange("exercises", clearedForm.exercises);
    onChange("climbType", clearedForm.climbType);
    onChange("leadGrade", clearedForm.leadGrade);
    onChange("boulderGrade", clearedForm.leadGrade);
    onChange("topRopeGrade", clearedForm.leadGrade);
    onChange("totalDistance", clearedForm.totalDistance);
  };

  return (
    <div>
      <div>
        <label>Workout Type:</label>
        {isEditMode ? (
          <input type="text" value={type ?? ""} readOnly />
        ) : (
          <select
            value={type ?? ""}
            onChange={(e) => handleTypeChange(e.target.value as Workout["type"])}
          >
            <option value="swim">Swim</option>
            <option value="waterpolo">Water Polo</option>
            <option value="strength">Strength</option>
            <option value="climb">Climb</option>
          </select>
        )}
      </div>

      <div>
        <label>Date:</label>
        <input
          type="date"
          value={date ?? ""}
          onChange={(e) => updateDate(e.target.value)}
        />
      </div>

      <div>
        <label>Start Time:</label>
        <input
          type="time"
          value={startTime ?? ""}
          onChange={(e) => updateStartTime(e.target.value)}
        />
      </div>

      <div>
        <label>End Time:</label>
        <input
          type="time"
          value={endTime ?? ""}
          onChange={(e) => updateEndTime(e.target.value)}
        />
      </div>

      <div>
        <label>Calories:</label>
        <input
          type="number"
          value={calories ?? 0}
          onChange={(e) => updateCalories(Number(e.target.value))}
        />
      </div>
    </div>
  );
}
