import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";

import { Footer } from "./components/footer/index";

import MainRoutes from "./data/routes";

function App() {
  return (
    <div className="bg-primary selection:bg-secondary selection:text-white">
      <BrowserRouter>
        <Navbar />

        <Routes>
          {
            MainRoutes.map(({ id, routePath, renderElement }) => (
              <Route key={id} path={routePath} element={renderElement} />
            ))
          }
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;