import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";

import MainRoutes from "./data/routes";

function App() {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Navbar />

        <Routes>
          {
            MainRoutes.map(({ id, routePath, renderElement }) => (
              <Route key={id} path={routePath} element={renderElement} />
            ))
          }
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;