import React, { useEffect, useState } from "react";
import axios from "axios";
import { Main } from "./Components/Main";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
