import { Link } from "react-router-dom";
import type { Workout } from "../types/workout";

interface DashboardProps {
  workouts: Workout[];
  onDelete: (id: number | null) => void;
}

export default function Dashboard({ workouts, onDelete }: DashboardProps) {
  return (
      <div>
        <h2>All Workouts</h2>
        <table style={{ width: "100%", marginTop: "20px", border: "1px solid #ccc" }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Start</th>
              <th>End</th>
              <th>Calories</th>
              <th>Key Details</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((w) => (
              <tr key={w.id}>
                <td>{w.date}</td>
                <td>{w.type}</td>
                <td>{w.startTime}</td>
                <td>{w.endTime}</td>
                <td>{w.calories}</td>
                <td>
                  {w.type === "swim" && `Distance: ${w.totalDistance}m`}
                  {w.type === "strength" && w.exercises !== undefined &&
                    w.exercises.map((ex) => `${ex.name} (${ex.sets.length} sets)`).join(", ")}
                  {w.type === "climb" &&
                    `Type: ${w.climbType}, Lead: ${w.leadGrade}, Top Rope: ${w.topRopeGrade}, Boulder: ${w.boulderGrade}`}
                </td>
                <td>
                    <Link to={`/${w.type}/${w.id}`} state={{ workout: w }}><button>View</button></Link>
                    <button type="button" onClick={() => onDelete(w.id)}>Delete</button>
                    <Link to={`/edit/${w.type}/${w.id}`} state={{ workout: w }}><button>Edit</button></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}