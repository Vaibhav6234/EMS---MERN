import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, replace, Route, Routes } from "react-router-dom";
import LoginLanding from "./pages/LoginLanding";
import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Employees from "./pages/Employees";
import Attandence from "./pages/Attandence";
import Leave from "./pages/Leave";
import Payslip from "./pages/Payslip";
import Settings from "./pages/Settings";
import PrintPlayslip from "./pages/PrintPlayslip";
import LoginForm from "./components/LoginForm";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginLanding />} />

        <Route path="/login/admin" element={<LoginForm role="admin" title="Admin portal" subtitle="Sign in to manage the organization" />} />
        <Route path="/login/employee" element={<LoginForm role="employee" title="Employee portal" subtitle="Sign in access you account" />} />

        <Route element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/attendance" element={<Attandence />} />
          <Route path="/leave" element={<Leave />} />
          <Route path="/payslips" element={<Payslip />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
        <Route path="/print/payslips/:id" element={<PrintPlayslip />} />
        <Route path="*" element={<Navigate to="/dashboard" />} replace />
      </Routes>
    </>
  );
};

export default App;
