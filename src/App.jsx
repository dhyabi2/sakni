import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import DownloadPage from './pages/Download';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-md">
          <div className="container mx-auto px-6 py-3">
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="text-gray-800 hover:text-blue-500">Home</Link>
              </li>
              <li>
                <Link to="/download" className="text-gray-800 hover:text-blue-500">Download</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<h1 className="text-3xl font-bold text-center mt-10">Welcome to Our App</h1>} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;