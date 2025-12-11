import type { Workout } from "../types/workout";

export function clearTypeSpecificFields(formData: Workout, nextType: Workout["type"]): Workout {
    const cleared: Workout = { ...formData, type: nextType };

    // Reset all type-specific arrays
    cleared.swimSets = (nextType === "swim" || nextType === "waterpolo") ? formData.swimSets ?? [] : [];
    cleared.exercises = nextType === "strength" ? formData.exercises ?? [] : [];

    // reset swim fields
    if (nextType !== "swim") {
        cleared.totalDistance = 0;
    }

    // reset climb fields
    if (nextType !== "climb") {
        cleared.climbType = "";
        cleared.leadGrade = "";
        cleared.topRopeGrade = "";
        cleared.boulderGrade = "";
    }

    return cleared;
}