import { useNavigate } from "react-router-dom";
import type { Workout } from "../../types/workout";

interface WorkoutActionsProps {
  workout: Workout;
  onDelete: (id: number) => void;
}

export default function WorkoutActions({ workout, onDelete }: WorkoutActionsProps) {
  const navigate = useNavigate();

  const handleEdit = () => {
    // Navigate to Add Page with workout pre-populated
    navigate(`/edit/${workout.type}/${workout.id}`, { state: { workout } });
  };

  const handleDelete = () => {
    if (workout.id) {
      onDelete(workout.id);
      navigate("/"); // back to dashboard after delete
    }
    else {
      // TODO: implement no ID case
    }
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <button type="button" onClick={handleEdit}>Edit</button>
      <button type="button" onClick={handleDelete}>Delete</button>
    </div>
  );
}
