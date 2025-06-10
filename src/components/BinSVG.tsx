export default function BinSVG({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={`w-6 h-6 stroke-black ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.7 8.7V19h8.6V8.7M5 8.2h14M9.8 8.2V6h4.4v2.2M10 11v6M12 11v6M14 11v6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
