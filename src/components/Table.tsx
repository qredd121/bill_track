import { TableProps } from "@/types";

export default function Table({ className, subscriptions }: TableProps) {
  return (
    <div
      className={`${className} rounded-2xl shadow-2xl h-full w-1/2 text-gray-200 flex items-center p-16 mt-32`}
    >
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Cost</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody className="">
          {subscriptions.map((sub) => (
            <tr key={sub.id} className="text-xl">
              <td>{sub.name}</td>
              <td>{sub.cost}</td>
              <td>{sub.paydate.slice(0, 10)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
