import swimWorkouts from "./mockSwim";
import waterPoloWorkouts from "./mockWaterPolo";
import strengthWorkouts from "./mockStrength";
import climbWorkouts from "./mockClimb";
import type { Workout } from "../types/workout";

const workouts: Workout[] = [
  ...swimWorkouts,
  ...waterPoloWorkouts,
  ...strengthWorkouts,
  ...climbWorkouts,
];

export default workouts;
