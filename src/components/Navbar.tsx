import Link from "next/link";
import AddSVG from "./AddSVG";

interface NavbarProps {
  className?: string;
  isAdd?: boolean;
}

export default function Navbar({ className, isAdd }: NavbarProps) {
  return (
    <div
      className={
        className
          ? "navbar border-b-1 border-b-gray-500 flex"
          : "navbar shadow-sm flex"
      }
    >
      <Link href="/">
        <p className="text-gray-300 font-bold mr-10 pl-4">BillTracker</p>
      </Link>
      {!isAdd && (
        <Link
          href="/add"
          className="btn-outline btn-xs text-gray-300 hover:text-white cursor-pointer text-lg justify-end ml-auto"
        >
          <AddSVG className="mr-4 w-8 h-8" />
        </Link>
      )}
    </div>
  );
}
