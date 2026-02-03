import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Breathe from "./pages/Breathe";
import Games from "./pages/Games";

import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    // The main wrapper ensures the eye-soothing blue theme covers the entire viewport
    <div className="min-h-screen bg-[#f0f7ff] selection:bg-blue-200 selection:text-blue-900">
      <BrowserRouter>
        {/* The Header is now sticky and blurred via its own component logic */}
        <Header />

        {/* Main content area with a gentle fade-in feel */}
        <main className="transition-all duration-1000 ease-in-out">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/breathing" element={<Breathe />} />
            <Route path="/games" element={<Games />} />

            {/* Protected Sanctuary Routes */}
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Routes>
        </main>

        {/* Optional: Global Footer Note can be added here if needed */}
      </BrowserRouter>
    </div>
  );
}

export default App;
