import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";
import "./App.css";
import News from "./components/News/News";
import Shedule from "./components/Shedule/Shedule";
import Gallery from "./components/Gallery/Gallery";
import Clergy from "./components/Clergy/Clergy";

function App() {
  return (
    <div className="main">
      {/* <h1>Моя церква</h1> */}
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<News />} />
            <Route path="/shedule" element={<Shedule/>} />
            <Route path="/gallery" element={<Gallery/>} />
            <Route path="/clergy" element={<Clergy/>} />
            <Route path="*" element={<h1>Element not found</h1>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
