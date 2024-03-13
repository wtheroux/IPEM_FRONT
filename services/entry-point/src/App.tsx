import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import App from 'app'
const Info = React.lazy(() => import("remote-modules-employee-info/Info"));
const TimeOff = React.lazy(() => import("remote-modules-employee-time-off/TimeOff"))
const Vacantion = React.lazy(() => import("remote-modules-employee-vacation/Vacation"))

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<div>Hello</div>} />
          <Route path="/info/*" element={<Info />} />
          <Route path="/time-off/*" element={<TimeOff />} />
          <Route path="/vacation/*" element={<Vacantion />} />
        </Routes>
    </Router>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(<App />);
