import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Calendar from "./pages/Calendar";
import Tasks from "./pages/Tasks";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Auth from "./pages/Auth";
import React from "react";


function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  );
}

export default App;
