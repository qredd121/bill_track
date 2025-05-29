import { NavbarProps } from "@/types";
import AddSVG from "./AddSVG";

export default function Navbar({ className, isAdd }: NavbarProps) {
  return (
    <div className={`border-b-1 border-b-gray-200 py-3 flex ${className}`}>
      <a className="cursor-pointer" href="/">
        <p className="text-gray-300 font-bold mr-10 pl-4">BillTracker</p>
      </a>
      <a className="cursor-pointer" href="all">
        <p className="text-gray-300 mr-10 pl-4">Your Subscriptions</p>
      </a>
      {!isAdd && (
        <a
          href="/add"
          className="btn-outline btn-xs text-gray-300 hover:text-white cursor-pointer text-lg justify-end ml-auto"
        >
          <AddSVG className="mr-4 w-8 h-8" />
        </a>
      )}
    </div>
  );
}
