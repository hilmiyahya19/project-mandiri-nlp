import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LanguageIdentifier from "./components/LanguageIdentifier";
// import Chatbot from "./components/Chatbot";
// import Summarization from "./components/Summarization";
// import Translation from "./components/Translation";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="bg-gray-200 p-4">
          <ul className="flex space-x-4">
            <li>
              <Link to="/language-identifier" className="text-blue-500 hover:underline">Language Identifier</Link>
            </li>
            {/* <li>
              <Link to="/chatbot" className="text-blue-500 hover:underline">Chatbot</Link>
            </li>
            <li>
              <Link to="/summarization" className="text-blue-500 hover:underline">Summarization</Link>
            </li>
            <li>
              <Link to="/translation" className="text-blue-500 hover:underline">Translation</Link>
            </li> */}
          </ul>
        </nav>
        <div className="p-4">
          <Routes>
            <Route path="/" element={<LanguageIdentifier />} />
            {/* <Route path="/chatbot" element={<Chatbot />} />
            <Route path="/summarization" element={<Summarization />} />
            <Route path="/translation" element={<Translation />} /> */}
            <Route path="/language-identifier" element={<LanguageIdentifier />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
