import { useState } from "react";

function LanguageIdentifier() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleIdentify = async () => {
    setError("");
    setResult(null);
    setLoading(true);

    try {
      const response = await fetch(
        "http://127.0.0.1:5000/identify_language/identify",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ text }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch language identification results");
      }

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Language Identifier
      </h1>
      <textarea
        className="w-full max-w-lg p-4 border border-gray-300 rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
        rows="4"
        placeholder="Enter text to detect its language"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button
        onClick={handleIdentify}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
        disabled={loading || !text}
      >
        {loading ? "Detecting..." : "Identify Language"}
      </button>

      {error && (
        <p className="mt-4 text-red-500 font-semibold">Error: {error}</p>
      )}

      {result && (
        <div className="mt-6 w-full max-w-lg bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800">Results</h2>
          <p className="mt-2 text-gray-700">
            <strong>Detected Language:</strong> {result.detected_language_name}{" "}
            ({result.detected_language})
          </p>
          <h3 className="mt-4 text-lg font-semibold text-gray-800">
            Possible Languages:
          </h3>
          <ul className="mt-2 space-y-2">
            {result.possible_languages.map((lang, index) => (
              <li
                key={index}
                className="p-2 border border-gray-300 rounded-lg bg-gray-50 shadow-sm"
              >
                {lang.language_name} ({lang.language}) -{" "}
                {Math.round(lang.probability * 100)}%
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageIdentifier;

