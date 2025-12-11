import type { Workout } from "../types/workout";

const strengthWorkouts: Workout[] = [
  {
    id: 3,
    type: "strength",
    date: "2025-12-03",
    startTime: "07:30",
    endTime: "08:30",
    calories: 400,
    exercises: [
      {
        name: "Bench Press",
        sets: [
          { reps: 10, weight: 60 },
          { reps: 8, weight: 70 },
        ],
      },
      {
        name: "Squat",
        sets: [
          { reps: 12, weight: 80 },
          { reps: 10, weight: 90 },
        ],
      },
    ],
  },
];

export default strengthWorkouts;
