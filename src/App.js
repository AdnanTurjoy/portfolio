import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Admin from "./admin/Admin";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experiance from "./pages/Experiance";
import Home from "./pages/Home";
import ProjectDisplay from "./pages/ProjectDisplay";
import Projects from "./pages/Projects";

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
