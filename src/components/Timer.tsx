import { useEffect, useState } from "react";

export default function Timer({ date }: { date: string }) {
  const [hours, setHours] = useState("00");
  const [mins, setMins] = useState("00");
  const [secs, setSecs] = useState("00");

  useEffect(() => {
    function updateTimer() {
      const diff = new Date(date).getTime() - new Date().getTime();
      const h = Math.floor(diff / (1000 * 3600)).toString();
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)).toString();
      const s = Math.floor((diff % (1000 * 60)) / 1000).toString();

      setHours(h.toString().padStart(2, "0"));
      setMins(m.toString().padStart(2, "0"));
      setSecs(s.toString().padStart(2, "0"));
    }
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, [date]);

  return (
    <div>
      <p className="text-lg font-bold text-gray-400">
        {hours}:{mins}:{secs}
      </p>
    </div>
  );
}
