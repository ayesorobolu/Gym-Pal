import {BrowserRouter,Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Createpage from "./pages/Createpage";
import Navbar from "./components/Navbar";
// import { Box, Container } from "@chakra-ui/react";
function App() {

  return (
<div className="App">
  <BrowserRouter>
  <Navbar/>
  <div className="pages">
    <Routes>
      <Route path="/"  element={<Homepage />}/> 
      <Route path="/create" element={<Createpage />}/>
    </Routes>
  </div>
  </BrowserRouter>

</div>
  );
}

export default App
 