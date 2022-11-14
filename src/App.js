import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experiance from "./pages/Experiance";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import Admin from "./admin/Admin";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <>
      {loading ? (
        <div className="loader">
          <HashLoader color="#21325e">
            size={100}
            loading={loading}
          </HashLoader>
        </div>
      ) : (
        <div className="App">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              <Route path="/experiance" element={<Experiance />} />
              {/* admin */}
              <Route path="/admin" element={<Admin />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
      )}
    </>
  );
}

export default App;
