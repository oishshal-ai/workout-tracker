import React, { useState, useEffect } from "react";
import CommonFields from "./Workout/CommonFields";
import SwimFields from "./Swim/SwimFields";
import WaterPoloFields from "./WaterPolo/WaterPoloFields";
import StrengthFields from "./Strength/StrengthFields";
import ClimbFields from "./Climb/ClimbFields";
import type { Workout } from "../types/workout";

interface WorkoutFormProps {
  initialData: Workout;
  onSubmit: (workout: Workout) => void;
  isEditMode: boolean;
  resetSignal: number;
}

export default function WorkoutForm({ initialData, onSubmit, isEditMode, resetSignal }: WorkoutFormProps) {
  const [formData, setFormData] = useState<Workout>(initialData);

  // Whenever resetSignal changes, reset formData back to initialData
  useEffect(() => {
    setFormData(initialData);
  }, [resetSignal, initialData]);

  const handleChange = (field: keyof Workout, value: any) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{isEditMode ? "Edit Workout" : "Add Workout"}</h2>

      {/* Common fields */}
      <CommonFields
        formData={formData}
        onChange={handleChange}
        resetSignal={resetSignal}
        isEditMode={isEditMode}
      />

      {/* Type-specific fields */}
      {formData.type === "swim" && (
        <SwimFields
          formData={formData}
          onChange={handleChange}
          resetSignal={resetSignal}
        />
      )}
      {formData.type === "waterpolo" && (
        <WaterPoloFields
          formData={formData}
          onChange={handleChange}
          resetSignal={resetSignal}
        />
      )}
      {formData.type === "strength" && (
        <StrengthFields
          formData={formData}
          onChange={handleChange}
          resetSignal={resetSignal}
        />
      )}
      {formData.type === "climb" && (
        <ClimbFields
          formData={formData}
          onChange={handleChange}
          resetSignal={resetSignal}
        />
      )}

      <button type="submit">{isEditMode ? "Save Changes" : "Add"}</button>
    </form>
  );
}
