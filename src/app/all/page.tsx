"use client";

import Loader from "@/components/Loader";
import NoSubscriptions from "@/components/NoSubscriptions";
import Table from "@/components/Table";
import { MessageContext } from "@/components/WsProvider";
import { Subscription } from "@/types";
import { useContext, useEffect, useState } from "react";

export default function All() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>();
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
    await fetch(`http://${process.env.NEXT_PUBLIC_WSS_HOSTNAME}:3001/message`, {
      method: "GET",
    });
  }

  return (
    <div className="bg-base-300 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        {subscriptions && subscriptions.length > 0 && (
          <div className="space-y-6">
            <div className="text-center">
              <h1 className="text-3xl font-bold text-base-content mb-2">
                Your Subscriptions
              </h1>
              <p className="text-base-content/70">
                Manage all your recurring payments
              </p>
            </div>
            <Table
              handleDeletion={handleDeletion}
              subscriptions={subscriptions}
            />
          </div>
        )}
        {subscriptions && subscriptions.length === 0 && <NoSubscriptions />}
        {!subscriptions && (
          <div className="flex justify-center items-center min-h-[50vh]">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
}
