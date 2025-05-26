export default function AddSVG({ className }: { className?: string }) {
  return (
    <svg
      className={className ?? "w-6 h-6 text-black"}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        x1="12"
        x2="12"
        y1="19"
        y2="5"
      />
      <line
        className="stroke-current"
        strokeWidth="2"
        strokeLinecap="round"
        x1="5"
        x2="19"
        y1="12"
        y2="12"
      />
    </svg>
  );
}
