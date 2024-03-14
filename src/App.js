import { Routes, Route } from "react-router-dom";

import "./App.css";
import HomePage from "./pages/home/HomePage";
import ArticleDetail from "./pages/home/articleDetail/ArticleDetailPage";

function App() {
  return (
    <div className="App font-opensans">
      <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route index path="/blog/:id" element={<ArticleDetail />} />
      </Routes>
    </div>
  );
}

export default App;
