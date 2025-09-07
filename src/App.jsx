import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";
import "./App.css";
import News from "./components/News/News";
import Shedule from "./components/Shedule/Shedule";
import Gallery from "./components/Gallery/Gallery";
import Clergy from "./components/Clergy/Clergy";
// import BreakpointHelper from "./components/BreakpointHelper/BreakpointHelper";
import Footer from "./components/Footer/Footer";
import Calendar from "./components/Calendar/Calendar";
import Prayers from "./components/Prayers/Prayers";
import School from "./components/School/School";

function App() {
  return (
    <div className="main">
     
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<News />} />
            <Route path="/school" element={<School />} />
            <Route path="/shedule" element={<Shedule />} />
            <Route path="/сalendar" element={<Calendar />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/prayers" element={<Prayers/>} />
            <Route path="/clergy" element={<Clergy />} />
            
            <Route path="*" element={<h1>Element not found</h1>} />
          </Route>
        </Routes>
      </div>
      {/* <BreakpointHelper /> */}
      <Footer />
    </div>
  );
}

export default App;
