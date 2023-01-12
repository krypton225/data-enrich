import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components";

import { Contact, FAQ, Home, Pricing } from "./routes";

function App() {
  return (
    <div className="bg-primary">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;