import { TableProps } from "@/types";
import { useRouter } from "next/navigation";
import BinSVG from "./BinSVG";

export default function Table({
  handleDeletion,
  className,
  subscriptions,
}: TableProps) {
  const router = useRouter();
  return (
    <div className={`card bg-base-100 shadow-xl ${className}`}>
      <div className="card-body p-0">
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr>
                <th className="text-base-content font-semibold">Name</th>
                <th className="text-base-content font-semibold">Cost</th>
                <th className="text-base-content font-semibold">Plan</th>
                <th className="text-base-content font-semibold">Due Date</th>
                <th className="text-base-content font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {subscriptions.map((sub) => (
                <tr
                  key={sub.id}
                  className="hover:bg-base-200 cursor-pointer transition-colors"
                  onClick={() => router.push(`${sub.id}`)}
                >
                  <td className="font-medium text-base-content">{sub.name}</td>
                  <td className="text-base-content">
                    <span className="font-mono">
                      ${parseFloat(sub.cost).toFixed(2)}
                    </span>
                  </td>
                  <td>
                    <span className="badge badge-outline">
                      {sub.plan.charAt(0).toUpperCase() + sub.plan.slice(1)}
                    </span>
                  </td>
                  <td className="text-base-content font-mono">
                    {sub.paydate.slice(0, 10)}
                  </td>
                  <td>
                    <button
                      className="btn btn-ghost btn-sm text-error hover:bg-error hover:text-error-content"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        handleDeletion(sub.id.toString());
                      }}
                    >
                      <BinSVG />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
