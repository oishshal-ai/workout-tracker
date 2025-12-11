import { useLocation, useParams } from "react-router-dom";
import workouts from "../data";
import WorkoutActions from "../components/Workout/WorkoutActions";
import type { StrengthExercise } from "../types/workout";

interface StrengthWorkoutDetailProps {
  onDelete: (id: number) => void;
}

export default function StrengthWorkoutDetail({ onDelete }: StrengthWorkoutDetailProps) {
  const location = useLocation();
  const { id } = useParams();

  let workout = location.state?.workout;

  // Fallback: find workout in mock data by id and type
  if (!workout) {
    workout = workouts.find((w) => w.type === "strength" && String(w.id) === id);
  }

  if (!workout) return <p>Workout not found.</p>;

  return (
    <div>
      <h2>Strength Training Workout Details</h2>
      <p><strong>Date:</strong> {workout.date}</p>
      <p><strong>Start Time:</strong> {workout.startTime}</p>
      <p><strong>End Time:</strong> {workout.endTime}</p>
      <p><strong>Calories:</strong> {workout.calories}</p>

      {workout.exercises?.map((exercise: StrengthExercise, exIndex: number) => (
        <div key={exIndex} style={{ marginTop: "20px" }}>
          <h3>{exercise.name}</h3>
          <table style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}>
            <thead>
              <tr>
                <th>#</th>
                <th>Reps</th>
                <th>Weight (kg)</th>
              </tr>
            </thead>
            <tbody>
              {exercise.sets.map((set, setIndex) => (
                <tr key={setIndex}>
                  <td>{setIndex + 1}</td>
                  <td>{set.reps}</td>
                  <td>{set.weight}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}

      <WorkoutActions workout={workout} onDelete={onDelete} />
    </div>
  );
}
