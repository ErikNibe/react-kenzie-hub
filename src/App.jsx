import Global from "./styles/global";
import {RoutesMain as Routes} from './routes';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <Global />

      <AuthProvider>
        <Routes />
      </AuthProvider>

      <ToastContainer
        position="top-right"
        autoClose={1000}
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
