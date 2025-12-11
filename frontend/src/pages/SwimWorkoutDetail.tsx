import { useLocation, useParams } from "react-router-dom";
import SwimSetsDetail from "../components/Shared/SwimSetsDetail";
import workouts from "../data"; // imports from index.js
import WorkoutActions from "../components/Workout/WorkoutActions";

interface SwimWorkoutDetailProps {
  onDelete: (id: number) => void;
}

export default function SwimWorkoutDetail({ onDelete }: SwimWorkoutDetailProps) {
  const location = useLocation();
  const { id } = useParams();

  // Try to get workout from Link state
  let workout = location.state?.workout;

  // Fallback: find workout in mock data by id and type
  if (!workout) {
    workout = workouts.find((w) => w.type === "swim" && String(w.id) === id);
  }

  if (!workout) {
    return <p>Workout not found.</p>;
  }

  return (
    <div>
      <h2>Swim Workout Details</h2>
      <p><strong>Date:</strong> {workout.date}</p>
      <p><strong>Start Time:</strong> {workout.startTime}</p>
      <p><strong>End Time:</strong> {workout.endTime}</p>
      <p><strong>Total Distance:</strong> {workout.totalDistance} m</p>
      {workout.calories && <p><strong>Calories Burned:</strong> {workout.calories}</p>}

      <SwimSetsDetail swimSets={workout.swimSets} />

      <WorkoutActions workout={workout} onDelete={onDelete} />
    </div>
  );
}
