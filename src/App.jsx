import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import JobList from "./pages/JobList";
import Header from "./Common/Header";
import NavbarMenu from "./Common/NavBar";
import Login from "./pages/Login";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <div className="position-relative">
      {isAuthenticated ? (
        <>
          <Header />
          <NavbarMenu />
          <div className="common-pages">
            <Routes>
              <Route path="/JobList" element={<JobList />} />
            </Routes>
          </div>
        </>
      ) : (
        <Routes>
          <Route
            path="/"
            element={<Login setAuthenticated={setAuthenticated} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
