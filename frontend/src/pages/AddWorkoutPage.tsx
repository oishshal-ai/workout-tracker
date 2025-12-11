import { useState } from "react";
import { useNavigate } from "react-router-dom";
import WorkoutForm from "../components/Workout/WorkoutForm";
import type { Workout } from "../types/workout";

interface AddWorkoutPageProps {
  onAdd: (workout: Workout) => void;
}

export default function AddWorkoutPage({ onAdd }: AddWorkoutPageProps) {
  const [resetSignal, setResetSignal] = useState(0);
  const navigate = useNavigate();

  const initialData: Workout = {
    id: null,
    type: "swim",
    date: "",
    startTime: "",
    endTime: "",
    calories: 0,
    totalDistance: 0,
    swimSets: [],
    exercises: [],
    climbType: "",
    leadGrade: "",
    topRopeGrade: "",
    boulderGrade: "",
  };

  const handleAdd = (workout: Workout) => {
    console.log("Adding workout:", workout);
    onAdd(workout);

    // Navigate to detail page
    navigate(`/${workout.type}/${workout.id}`);
  };

  return (
    <>
      <WorkoutForm initialData={initialData} onSubmit={handleAdd} isEditMode={false} resetSignal={resetSignal} />
      <button type="button" onClick={() => setResetSignal((s) => s + 1)}>Reset</button>
    </>
  );
}