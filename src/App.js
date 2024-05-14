import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import SummaryPage from './components/SummaryPage';
import SkillsPage from './components/SkillsPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import './styles/style.css'; // Make sure this file exists and is correctly linked
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';


function App() {
  return (
    <Router>
      <div className="d-flex flex-column vh-100"> {/* Full viewport height and flex column */}
        <NavBar />

        <div className="container flex-fill"> {/* Flex-fill to take up available space */}
          <Routes>
            <Route path="/" element={<SummaryPage />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Routes>
        </div>
        <Footer />
      
      </div>
    </Router>
  );
}

export default App;
