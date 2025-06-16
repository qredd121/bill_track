"use client";

import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import NoSubscriptions from "@/components/NoSubscriptions";
import Table from "@/components/Table";
import { MessageContext } from "@/components/WsProvider";
import { Subscription } from "@/types";
import { useContext, useEffect, useState } from "react";

export default function All() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const message = useContext(MessageContext);

  useEffect(() => {
    fetch("/api/subscriptions")
      .then((res) => res.json())
      .then((data) => setSubscriptions(data));
  }, [message]);

  async function handleDeletion(id: string) {
    await fetch(`/api/subscriptions/${id}`, {
      method: "DELETE",
    });
    await fetch(`http://${process.env.HOSTNAME}:3001/message`, {
      method: "GET",
    });
  }

  return (
    <div className="bg-gray-700 min-h-screen">
      <Navbar />
      {subscriptions.length > 0 && (
        <div className="flex items-center justify-center inset-0">
          <Table
            handleDeletion={handleDeletion}
            subscriptions={subscriptions}
          />
        </div>
      )}
      {subscriptions.length == 0 && <NoSubscriptions />}
      {!subscriptions && (
        <Loader className="justify-center absolute right-1/2 bottom-1/2" />
      )}
    </div>
  );
}
