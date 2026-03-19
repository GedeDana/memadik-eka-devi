import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NotFoundComponent from "./components/NotFoundComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<NotFoundComponent />} />
    </Routes>
  );
}

export default App;