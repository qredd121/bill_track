import AddSVG from "./AddSVG";

export default function Navbar({ className }: { className?: string }) {
  return (
    <div className={className && "navbar shadow-sm  flex"}>
      <p className="text-black font-bold mr-10 pl-4">BillTracker</p>
      <a className="btn-outline btn-xs text-gray-400 hover:text-black cursor-pointer text-lg justify-end ml-auto">
        <AddSVG className="mr-4 w-8 h-8" />
      </a>
    </div>
  );
}
