import { useLocation, useParams } from "react-router-dom";
import workouts from "../data";
import WorkoutActions from "../components/Workout/WorkoutActions";

interface ClimbWorkoutDetailProps {
  onDelete: (id: number) => void;
}

export default function ClimbWorkoutDetail({ onDelete }: ClimbWorkoutDetailProps) {
  const location = useLocation();
  const { id } = useParams();

  let workout = location.state?.workout;

  // Fallback: find workout in mock data by id and type
  if (!workout) {
    workout = workouts.find((w) => w.type === "climb" && String(w.id) === id);
  }

  if (!workout) return <p>Workout not found.</p>;

  return (
    <div>
      <h2>Climbing Workout Details</h2>
      <p><strong>Date:</strong> {workout.date}</p>
      <p><strong>Start Time:</strong> {workout.startTime}</p>
      <p><strong>End Time:</strong> {workout.endTime}</p>
      <p><strong>Calories:</strong> {workout.calories}</p>
      <p><strong>Type of Climbing:</strong> {workout.climbType}</p>
      <p><strong>Highest Lead Grade:</strong> {workout.leadGrade}</p>
      <p><strong>Highest Top Rope Grade:</strong> {workout.topRopeGrade}</p>
      <p><strong>Highest Boulder Grade:</strong> {workout.boulderGrade}</p>

      <WorkoutActions workout={workout} onDelete={onDelete} />
    </div>
  );
}
