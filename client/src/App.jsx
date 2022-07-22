import Home from "./pages/Home";
import Background from "./components/layout/Background";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/Register";

function App() {

  return (
    <Background>

    <BrowserRouter>
          <Routes >
            <Route path="/" element={<Home/>}/>
              <Route path="/register" element={<Register/>} />
          </Routes>
    </BrowserRouter>


    </Background>
  );
}

export default App;
