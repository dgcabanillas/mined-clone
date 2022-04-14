import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppState from "src/components/context/app/app.state";

import MainLayout from "src/components/layout/MainLayout";

import Home from 'src/pages/home';
import Tutor from "src/pages/tutor";
import Tutors from "src/pages/tutors";
import ECommerce from "src/pages/sections/ecommerce";
import VideoPlayer from "./components/core/VideoPlayer";

function App() {
  return (
    <AppState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/section" element={<MainLayout />}>
            <Route path="ecommerce" element={<ECommerce />}/>
          </Route>
          <Route path="/tutor" element={<MainLayout />}>
            <Route path="" element={<Tutor />}/>
          </Route>
          <Route path="/tutors" element={<MainLayout />}>
            <Route path="" element={<Tutors />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      <VideoPlayer />
    </AppState>
  );
}

export default App;