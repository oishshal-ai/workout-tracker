import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import WorkoutForm from "../components/Workout/WorkoutForm";
import type { Workout } from "../types/workout";

interface EditWorkoutPageProps {
  onUpdate: (workout: Workout) => void;
}

export default function EditWorkoutPage({ onUpdate }: EditWorkoutPageProps) {
  const location = useLocation();
  const workout: Workout = location.state?.workout;
  const navigate = useNavigate();

  const [resetSignal, setResetSignal] = useState(0);

  const handleUpdate = (updated: Workout) => {
    console.log("Updating workout:", updated);
    onUpdate(updated);

    // Navigate to detail page
    navigate(`/${updated.type}/${updated.id}`);
  };

  const handleReset = () => {
    setResetSignal((s) => s + 1);
  };

  return (
    <>
      <WorkoutForm initialData={workout} onSubmit={handleUpdate} isEditMode={true} resetSignal={resetSignal} />
      <button type="button" onClick={handleReset}>Reset</button>
    </>
  );
}
