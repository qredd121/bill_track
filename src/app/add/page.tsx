"use client";

import React, { useState } from "react";

export default function Add() {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {};

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-3xl p-16 border border-gray-200 rounded-2xl shadow-2xl bg-white">
        <h2 className="text-5xl font-bold mb-12 text-center text-gray-800">
          Add New Subscription
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
          <label className="form-control w-full">
            <span className="label-text mb-2 text-xl text-gray-700">
              Subscription Name
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="input input-bordered input-lg w-full bg-gray-50 text-gray-900 border-gray-300"
              placeholder="e.g. Netflix"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-2 text-xl text-gray-700">Cost</span>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
              min="0"
              step="0.01"
              className="input input-bordered input-lg w-full bg-gray-50 text-gray-900 border-gray-300"
              placeholder="e.g. 9.99"
            />
          </label>
          <label className="form-control w-full">
            <span className="label-text mb-2 text-xl text-gray-700">
              Due Date
            </span>
            <input
              type="date"
              value={dueDate}
              onChange={(e) => setDueDate(e.target.value)}
              required
              className="input input-bordered input-lg w-full bg-gray-50 text-gray-900 border-gray-300"
            />
          </label>
          <button
            type="submit"
            className="btn btn-primary btn-lg mt-8 bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
          >
            Add Subscription
          </button>
        </form>
      </div>
    </div>
  );
}
