import { useEffect, useState } from "react";
import React from "react";

import { initTheme, setTheme } from "../theme";

export default function Settings() {
  const [theme, setThemeState] = useState("light");
  const [apiBase, setApiBase] = useState(localStorage.getItem("apiBaseUrl") || "http://localhost:5002");

  useEffect(() => {
    setThemeState(initTheme());
  }, []);

  const saveTheme = (val) => {
    setTheme(val);
    setThemeState(val);
  };

  const saveApiBase = () => {
    localStorage.setItem("apiBaseUrl", apiBase);
    window.location.reload();
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Settings</h2>

      <section className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
        <h3 className="font-semibold mb-3">Theme</h3>
        <div className="flex gap-2">
          <button
            onClick={() => saveTheme("light")}
            className={`px-3 py-2 rounded-lg border ${theme==="light" ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 dark:border-gray-700"}`}
          >
            Light
          </button>
          <button
            onClick={() => saveTheme("dark")}
            className={`px-3 py-2 rounded-lg border ${theme==="dark" ? "bg-blue-600 text-white border-blue-600" : "border-gray-300 dark:border-gray-700"}`}
          >
            Dark
          </button>
        </div>
      </section>

      <section className="rounded-xl border border-gray-200 dark:border-gray-800 p-4">
        <h3 className="font-semibold mb-3">API</h3>
        <label className="block text-sm mb-1">Backend Base URL</label>
        <input
          className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-transparent"
          value={apiBase}
          onChange={(e) => setApiBase(e.target.value)}
          placeholder="http://localhost:5002"
        />
        <button
          onClick={saveApiBase}
          className="mt-3 px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Save & Reload
        </button>
      </section>
    </div>
  );
}
