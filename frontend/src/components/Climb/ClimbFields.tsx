import type { Workout } from "../../types/workout";
import { useWorkoutField } from "../../hooks/useWorkoutField";
import type { WorkoutSectionProps } from "../../types/props/workoutFields";

export default function ClimbFields({ formData, onChange, resetSignal }: WorkoutSectionProps) {
  const { localValue: climbType, updateValue: updateClimbType } = useWorkoutField(formData, "climbType", resetSignal, onChange);
  const { localValue: leadGrade, updateValue: updateLeadGrade } = useWorkoutField(formData, "leadGrade", resetSignal, onChange);
  const { localValue: topRopeGrade, updateValue: updateTopRopeGrade } = useWorkoutField(formData, "topRopeGrade", resetSignal, onChange);
  const { localValue: boulderGrade, updateValue: updateBoulderGrade } = useWorkoutField(formData, "boulderGrade", resetSignal, onChange);

  return (
    <div>
      <div>
        <label>Type of Climbing:</label>
        <select
          value={climbType}
          onChange={(e) => updateClimbType(e.target.value as Workout["climbType"])}
        >
          <option value="">-- Select --</option>
          <option value="bouldering">Bouldering</option>
          <option value="lead">Lead</option>
          <option value="toprope">Top Rope</option>
          <option value="mix">Mix</option>
        </select>
      </div>
      <div>
        <label>Highest Grade Lead (optional):</label>
        <input
          type="text"
          value={leadGrade}
          onChange={(e) => updateLeadGrade(e.target.value)}
        />
      </div>
      <div>
        <label>Highest Grade Top Rope (optional):</label>
        <input
          type="text"
          value={topRopeGrade}
          onChange={(e) => updateTopRopeGrade(e.target.value)}
        />
      </div>
      <div>
        <label>Highest Grade Boulder (optional):</label>
        <input
          type="text"
          value={boulderGrade}
          onChange={(e) => updateBoulderGrade(e.target.value)}
        />
      </div>
    </div>
  );
}
