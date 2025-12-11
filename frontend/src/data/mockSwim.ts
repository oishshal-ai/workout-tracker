import type { Workout } from "../types/workout";

const swimWorkouts: Workout[] = [
  {
    id: 1,
    type: "swim",
    date: "2025-12-01",
    startTime: "08:00",
    endTime: "09:00",
    calories: 300,
    totalDistance: 1500,
    swimSets: [
      { count: 8, distance: 50, stroke: "Freestyle", interval: 50 },
      { count: 4, distance: 100, stroke: "Backstroke", interval: 90 },
    ],
  },
];

export default swimWorkouts;
