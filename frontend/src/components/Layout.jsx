import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import { initTheme, setTheme } from "../theme";

const nav = [
  { to: "/", label: "Dashboard" },
  { to: "/calendar", label: "Calendar" },
  { to: "/tasks", label: "Tasks" },
  { to: "/settings", label: "Settings" },
  { to: "/auth", label: "Login" },
];

export default function Layout({ children }) {
  const [theme, setThemeState] = useState("light");

  useEffect(() => {
    setThemeState(initTheme());
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    setThemeState(next);
  };

  return (
    <div className="min-h-screen flex bg-gray-50 text-gray-900 dark:bg-gray-950 dark:text-gray-100">
      <aside className="w-64 border-r border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur p-4 hidden md:block">
        <h1 className="text-xl font-bold mb-6">Task Calendar</h1>
        <nav className="flex flex-col gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg transition ${
                  isActive
                    ? "bg-blue-600 text-white"
                    : "hover:bg-gray-100 dark:hover:bg-gray-800"
                }`
              }
              end={n.to === "/"}
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          className="mt-6 px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          Toggle {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </aside>

      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b border-gray-200 dark:border-gray-800 px-4 flex items-center justify-between sticky top-0 bg-white/70 dark:bg-gray-900/60 backdrop-blur z-10">
          <div className="md:hidden font-semibold">Task Calendar</div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="px-3 py-1.5 rounded-md text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {theme === "dark" ? "Light" : "Dark"}
            </button>
          </div>
        </header>
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
}
