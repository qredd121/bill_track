import { TableProps } from "@/types";
import { useRouter } from "next/navigation";

export default function Table({ className, subscriptions }: TableProps) {
  const router = useRouter();
  return (
    <div
      className={`${className} rounded-2xl shadow-2xl h-full w-1/2 text-gray-200 flex items-center p-16 mt-32`}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Plan</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody className="">
          {subscriptions.map((sub) => (
            <tr
              key={sub.id}
              className="text-xl cursor-pointer hover:text-gray-400"
              onClick={() => router.push(`${sub.id}`)}
            >
              <td>{sub.name}</td>
              <td>{sub.cost.toFixed(2)}</td>
              <td>{sub.plan.charAt(0).toUpperCase() + sub.plan.slice(1)}</td>
              <td>{sub.paydate.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
