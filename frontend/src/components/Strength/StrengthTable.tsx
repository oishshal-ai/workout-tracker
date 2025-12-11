import type { WorkoutTableProps } from "../../types/props/workoutFields";
import type { StrengthExercise, StrengthSet } from "../../types/workout";
import { useWorkoutTable } from "../../hooks/useWorkoutTable";

export default function StrengthTable({ items, onChange, resetSignal }: WorkoutTableProps<StrengthExercise>) {
  const { localItems: exercises, updateItem, addItem, removeItem } =
    useWorkoutTable<StrengthExercise>(items, resetSignal, onChange);

  // helper to update sets inside an exercise
  const updateSets = (exerciseIndex: number, updatedSets: StrengthSet[]) => {
    const exercise = exercises[exerciseIndex];
    if (exercise) {
      updateItem(exerciseIndex, { ...exercise, sets: updatedSets });
    }
  };

  return (
    <div>
      {exercises.map((exercise, exerciseIndex) => (
        <div key={exerciseIndex} style={{ border: "1px solid #ccc", marginBottom: "1rem", padding: "0.5rem" }}>
          <label>Exercise Name:</label>
          <input
            type="text"
            value={exercise.name ?? ""}
            onChange={(e) => updateItem(exerciseIndex, { ...exercise, name: e.target.value })}
          />

          <h4>Sets</h4>
          {exercise.sets.map((set, setIndex) => (
            <div key={setIndex} style={{ marginLeft: "1rem" }}>
              <label>Reps:</label>
              <input
                type="number"
                value={set.reps ?? 0}
                onChange={(e) => {
                  const updatedSets = [...exercise.sets];
                  updatedSets[setIndex] = { ...set, reps: Number(e.target.value) };
                  updateSets(exerciseIndex, updatedSets);
                }}
              />
              <label>Weight:</label>
              <input
                type="number"
                value={set.weight ?? 0}
                onChange={(e) => {
                  const updatedSets = [...exercise.sets];
                  updatedSets[setIndex] = { ...set, weight: Number(e.target.value) };
                  updateSets(exerciseIndex, updatedSets);
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const updatedSets = exercise.sets.filter((_, i) => i !== setIndex);
                  updateSets(exerciseIndex, updatedSets);
                }}
              >
                Remove Set
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => updateSets(exerciseIndex, [...exercise.sets, { reps: 0, weight: 0 }])}
          >
            Add Set
          </button>

          <button type="button" onClick={() => removeItem(exerciseIndex)}>Remove Exercise</button>
        </div>
      ))}

      <button type="button" onClick={() => addItem({ name: "", sets: [] })}>Add Exercise</button>
    </div>
  );
}

