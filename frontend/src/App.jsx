import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LanguageIdentifier from "./components/LanguageIdentifier";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-200 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/language-identifier" className="text-blue-500 hover:underline">Language Identifier</Link>
            </li>
          </ul>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<LanguageIdentifier />} />
            <Route path="/language-identifier" element={<LanguageIdentifier />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
