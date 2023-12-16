import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Test from "./pages/Test";
import Passed from "./pages/Passed";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/test" element={<Test />} />
        <Route path="/passed" element={<Passed />} />
        <Route path="*" element={<h1>Hva prøver du på?</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
