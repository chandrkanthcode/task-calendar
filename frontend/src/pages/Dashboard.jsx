import { useQuery } from "@tanstack/react-query";
import { fetchTasks } from "../api/tasks";
import React from "react";

export default function Dashboard() {
  const { data: tasks = [], isLoading } = useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });

  const stats = {
    total: tasks.length,
    completed: tasks.filter(t => t.status === "completed").length,
    pending: tasks.filter(t => t.status !== "completed").length,
    overdue: tasks.filter(t => t.dueDate && new Date(t.dueDate) < new Date() && t.status !== "completed").length,
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Dashboard</h2>

      {isLoading ? (
        <p>Loading…</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card title="Total Tasks" value={stats.total} />
          <Card title="Completed" value={stats.completed} />
          <Card title="Pending" value={stats.pending} />
          <Card title="Overdue" value={stats.overdue} />
        </div>
      )}

      <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
        Tip: Create a task on the Tasks page to see these numbers move.
      </div>
    </div>
  );
}

function Card({ title, value }) {
  return (
    <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
      <div className="text-sm text-gray-500 dark:text-gray-400">{title}</div>
      <div className="text-3xl font-bold mt-1">{value}</div>
    </div>
  );
}
