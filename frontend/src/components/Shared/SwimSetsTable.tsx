import type { WorkoutTableProps } from "../../types/props/workoutFields";
import type { SwimSet } from "../../types/workout";
import { useWorkoutTable } from "../../hooks/useWorkoutTable";

export default function SwimSetsTable({ items, onChange, resetSignal }: WorkoutTableProps<SwimSet>) {
  const { localItems: localSwimSets, updateItem: updateSwimSet, addItem: addSwimSet, removeItem: removeSwimSet } = useWorkoutTable<SwimSet>(items, resetSignal, onChange);

  return (
    <div>
      <h3>Swim Sets</h3>
      <table style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}>
        <thead>
          <tr>
            <th>Count</th>
            <th>Distance (m)</th>
            <th>Stroke</th>
            <th>Interval (s)</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {localSwimSets.map((set, index) => (
            <tr key={index}>
              <td>
                <input
                  type="number"
                  value={set.count ?? 0}
                  onChange={(e) => updateSwimSet(index, { ...set, count: Number(e.target.value) })}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={set.distance ?? 0}
                  onChange={(e) => updateSwimSet(index, { ...set, distance: Number(e.target.value) })}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={set.stroke ?? ""}
                  onChange={(e) => updateSwimSet(index, { ...set, stroke: e.target.value })}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={set.interval ?? 0}
                  onChange={(e) => updateSwimSet(index, { ...set, interval: Number(e.target.value) })}
                />
              </td>
              <td>
                <button type="button" onClick={() => removeSwimSet(index)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button" onClick={() => addSwimSet({ count: 0, distance: 0, stroke: "", interval: 0 })}>
        + Add Swim Set
      </button>
    </div>
  );
}
