const points = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function AddPoints({
  onAddPoints,
}: {
  onAddPoints: (point: number) => void;
}) {
  return (
    <div>
      {points.map((p) => (
        <button key={`button-${String(p)}`} onClick={() => onAddPoints(p)}>
          {String(p)}
        </button>
      ))}
    </div>
  );
}