import React from "react";

export default function Calendar() {
  return (
    <div className="space-y-3">
      <h2 className="text-2xl font-semibold">Calendar</h2>
      <p className="text-gray-600 dark:text-gray-400">
        Calendar integration coming next (react-big-calendar or FullCalendar). We’ll map tasks to events and enable drag & drop.
      </p>
      <div className="h-96 rounded-xl border border-dashed border-gray-300 dark:border-gray-700 grid place-items-center">
        <div className="text-sm text-gray-500">Calendar placeholder</div>
      </div>
    </div>
  );
}
