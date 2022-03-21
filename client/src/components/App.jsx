import Navbar from "./Navbar";
import './app.scss';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Registration from "./Authorization/Registration";
import Login from "./Authorization/Login";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {auth} from "../actions/user";

function App() {
  const isAuth = useSelector(state => state.user.isAuth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(auth());
  }, []);

  return (
    <BrowserRouter>
      <div className='app'>
        <Navbar/>
        <div className="wrap">
          {!isAuth &&
          <Routes>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
          </Routes>
          }
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
