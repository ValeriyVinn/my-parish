import { Routes, Route } from "react-router-dom";
import SharedLayout from "./layouts/SharedLayout";

import css from "./App.module.css";

function App() {
  return (
    <div className={css.main}>
      {/* <h1>Моя церква</h1> */}
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<h1>Моя церква</h1>} />
            <Route path="/shedule" element={<h1>Розклад Богослужіннь</h1>} />
            <Route path="/clergy" element={<h1>Клір собору</h1>} />
            <Route path="*" element={<h1>Element not found</h1>} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
