import Link from "next/link";
import AddSVG from "./AddSVG";

interface NavbarProps {
  className?: string;
  isAdd?: boolean;
}

export default function Navbar({ className, isAdd }: NavbarProps) {
  return (
    <div
      className={className ? "navbar shadow-sm flex" : "navbar shadow-sm flex"}
    >
      <p className="text-black font-bold mr-10 pl-4">BillTracker</p>
      {!isAdd && (
        <Link
          href="/add"
          className="btn-outline btn-xs text-gray-400 hover:text-black cursor-pointer text-lg justify-end ml-auto"
        >
          <AddSVG className="mr-4 w-8 h-8" />
        </Link>
      )}
    </div>
  );
}
