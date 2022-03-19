import Navbar from "./Navbar";
import './app.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./Registration";

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <Routes>
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
