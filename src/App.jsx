import Global from "./styles/global";
import {RoutesMain as Routes} from './routes';

import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./contexts/UserContext";
import { TechProvider } from "./contexts/TechContext";

function App() {
  return (
    <>
      <Global />

      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>

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
