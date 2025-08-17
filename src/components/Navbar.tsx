"use client";

import { usePathname } from "next/navigation";
import AddSVG from "./AddSVG";

export default function Navbar({ className }: { className?: string }) {
  const pathname = usePathname();
  const isAddPage = pathname === "/add";

  return (
    <div className={`navbar bg-base-200 shadow-lg ${className || ""}`}>
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl font-bold text-primary" href="/">
          BillTrack
        </a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="text-base-content hover:text-primary" href="/all">
              Your Subscriptions
            </a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {!isAddPage && (
          <a href="/add" className="btn btn-primary btn-sm gap-2">
            <AddSVG className="w-4 h-4" />
            <span className="hidden sm:inline">Add</span>
          </a>
        )}
      </div>
    </div>
  );
}
