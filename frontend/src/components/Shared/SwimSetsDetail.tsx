import type { SwimSet } from "../../types/workout";

interface SwimSetsDetailProps {
  swimSets: SwimSet[];
}

export default function SwimSetsDetail({ swimSets }: SwimSetsDetailProps) {
  if (!swimSets || swimSets.length === 0) {
    return null; // nothing to show
  }

  return (
    <div>
      <h3>Swim Sets</h3>
      <table style={{ marginBottom: "1rem", border: "1px solid #ccc", padding: "0.5rem" }}>
        <thead>
          <tr>
            <th>Set</th>
          </tr>
        </thead>
        <tbody>
          {swimSets.map((set, index) => (
            <tr key={index}>
              <td>
                {set.count}×{set.distance}m {set.stroke} @{set.interval}s
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}