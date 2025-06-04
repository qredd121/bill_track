import Navbar from "@/components/Navbar";
import SubscriptionCard from "@/components/SubscriptionCard";

export default function Add() {
  return (
    <div className="min-h-screen  bg-gray-700">
      <Navbar isAdd={true} />
      <SubscriptionCard />
    </div>
  );
}
