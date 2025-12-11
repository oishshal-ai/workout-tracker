export interface SwimSet {
  count: number;
  distance: number;
  stroke: string;
  interval: number;
}

export interface StrengthSet {
  reps: number;
  weight: number;
}

export interface StrengthExercise {
  name: string;
  sets: StrengthSet[];
}

export interface Workout {
  id: number | null;
  type: "swim" | "waterpolo" | "strength" | "climb";
  date: string;
  startTime: string;
  endTime: string;
  calories?: number;
  totalDistance?: number;
  swimSets?: SwimSet[];
  exercises?: StrengthExercise[];
  climbType?: "" | "bouldering" | "lead" | "toprope" | "mix";
  leadGrade?: string;
  topRopeGrade?: string;
  boulderGrade?: string;
}