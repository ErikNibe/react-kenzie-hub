import Global from "./styles/global";
import {RoutesMain as Routes} from './routes';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState([]);

  const [isLogged, setIsLogged] = useState(false)

  return (
    <>
      <Global />
      <Routes userInfo={userInfo} setUserInfo={setUserInfo} isLogged={isLogged} setIsLogged={setIsLogged}/>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  )
}

export default App
