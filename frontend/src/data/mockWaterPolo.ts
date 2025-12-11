import type { Workout } from "../types/workout";

const waterPoloWorkouts: Workout[] = [
  {
    id: 2,
    type: "waterpolo",
    date: "2025-12-02",
    startTime: "18:00",
    endTime: "19:00",
    calories: 500,
    swimSets: [
      { count: 6, distance: 25, stroke: "Freestyle", interval: 40 },
      { count: 4, distance: 50, stroke: "Breaststroke", interval: 60 },
    ],
  },
];

export default waterPoloWorkouts;
