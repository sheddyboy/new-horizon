import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Create from "./pages/Create";
import Camera from "./pages/Camera";
import Share from "./pages/Share";
import Email from "./pages/Email";
import CreateProvider from "./context/CreateProvider";
import Error from "./pages/Error";
import Sent from "./pages/Sent";
import Capture from "./pages/Capture";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CreateProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<Create />} />
          <Route path="/camera" element={<Camera />} />
          <Route path="/share" element={<Share />} />
          <Route path="/email" element={<Email />} />
          <Route path="/error" element={<Error />} />
          <Route path="/sent" element={<Sent />} />
          <Route path="/capture" element={<Capture />} />
        </Routes>
      </CreateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
