import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import CreateProvider from "./context/CreateProvider";
import Camera from "./pages/Camera";
import Capture from "./pages/Capture";
import Create from "./pages/Create";
import Email from "./pages/Email";
import Error from "./pages/Error";
import Sent from "./pages/Sent";
import Share from "./pages/Share";

const AllRoutes = () => {
  // useEffect(() => {
  //   const handleTabClose = (event: any) => {
  //     event.preventDefault();

  //     console.log(event.returnValue);
  //     console.log(event);
  //     console.log("hi");
  //     console.log("beforeunload event triggered");

  //     return (event.returnValue = "Are you sure you want to exit?");
  //   };

  //   window.addEventListener("beforeunload", handleTabClose);

  //   return () => {
  //     window.removeEventListener("beforeunload", handleTabClose);
  //   };
  // }, []);
  return (
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
  );
};

export default AllRoutes;
