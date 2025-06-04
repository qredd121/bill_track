import Navbar from "@/components/Navbar";
import SubscriptionCard from "@/components/SubscriptionCard";

export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="min-h-screen bg-gray-700">
      <Navbar />
      <SubscriptionCard id={id} />
    </div>
  );
}
