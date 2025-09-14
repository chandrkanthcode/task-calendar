import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTask, deleteTask, fetchTasks, updateTask } from "../api/tasks";
import { useState } from "react";
import React from "react";


export default function Tasks() {
  const qc = useQueryClient();
  const { data: tasks = [], isLoading, isError } = useQuery({ queryKey: ["tasks"], queryFn: fetchTasks });

  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    tags: "",
  });

  const createMut = useMutation({
    mutationFn: createTask,
    onSuccess: () => {
      setForm({ title: "", description: "", priority: "medium", dueDate: "", tags: "" });
      qc.invalidateQueries({ queryKey: ["tasks"] });
    },
  });

  const delMut = useMutation({
    mutationFn: deleteTask,
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const updMut = useMutation({
    mutationFn: ({ id, patch }) => updateTask(id, patch),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const onSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;
    const payload = {
      title: form.title.trim(),
      description: form.description.trim() || undefined,
      priority: form.priority,
      dueDate: form.dueDate ? new Date(form.dueDate) : undefined,
      tags: form.tags ? form.tags.split(",").map(s => s.trim()).filter(Boolean) : [],
    };
    createMut.mutate(payload);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Tasks</h2>

      <form onSubmit={onSubmit} className="rounded-xl border border-gray-200 dark:border-gray-800 p-4 grid md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Title</label>
          <input
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            placeholder="e.g., Finish report"
            required
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Priority</label>
          <select
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            value={form.priority}
            onChange={(e) => setForm({ ...form, priority: e.target.value })}
          >
            <option value="low">low</option>
            <option value="medium">medium</option>
            <option value="high">high</option>
          </select>
        </div>
        <div>
          <label className="block text-sm mb-1">Due date</label>
          <input
            type="date"
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            value={form.dueDate}
            onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Tags (comma separated)</label>
          <input
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            placeholder="work, urgent"
          />
        </div>
        <div className="md:col-span-2">
          <label className="block text-sm mb-1">Description</label>
          <textarea
            className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
            rows={3}
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
            placeholder="Optional notes..."
          />
        </div>
        <div className="md:col-span-2">
          <button
            disabled={createMut.isPending}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          >
            {createMut.isPending ? "Creating..." : "Add Task"}
          </button>
        </div>
      </form>

      <div className="rounded-xl border border-gray-200 dark:border-gray-800 divide-y divide-gray-200 dark:divide-gray-800">
        {isLoading && <div className="p-4">Loading tasks…</div>}
        {isError && <div className="p-4 text-red-600">Failed to load tasks.</div>}
        {!isLoading && tasks.length === 0 && <div className="p-4">No tasks yet. Add one above.</div>}

        {tasks.map((t) => (
          <div key={t._id} className="p-4 flex items-center gap-3">
            <input
              type="checkbox"
              checked={t.status === "completed"}
              onChange={(e) => updMut.mutate({ id: t._id, patch: { status: e.target.checked ? "completed" : "pending" } })}
              className="h-5 w-5"
            />
            <div className="flex-1">
              <div className="font-medium">{t.title}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                {t.description || "—"}
              </div>
              <div className="text-xs mt-1 flex gap-2 flex-wrap">
                <Badge>Priority: {t.priority}</Badge>
                {t.dueDate && <Badge>Due: {new Date(t.dueDate).toLocaleDateString()}</Badge>}
                {t.tags?.map((tag) => <Badge key={tag}>#{tag}</Badge>)}
              </div>
            </div>
            <button
              onClick={() => delMut.mutate(t._id)}
              className="px-3 py-1.5 rounded-md border border-red-300 text-red-700 hover:bg-red-50 dark:border-red-800 dark:text-red-400 dark:hover:bg-red-950/30"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Badge({ children }) {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700">
      {children}
    </span>
  );
}
