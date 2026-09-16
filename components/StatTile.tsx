export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-lg border border-line-soft bg-paper-2/50 px-4 py-6 text-center">
      <span className="font-display text-3xl font-semibold text-ember tabular-nums">{value}</span>
      <span className="text-xs text-muted-on-paper">{label}</span>
    </div>
  );
}
