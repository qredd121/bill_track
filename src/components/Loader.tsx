export default function Loader({ className }: { className?: string }) {
  return (
    <div className={`loading loading-spinner loading-lg ${className}`}></div>
  );
}
