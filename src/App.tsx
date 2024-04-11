import { ToastContainer } from "react-toastify";
import "./App.css";
import router from "./services/Routes/router";
import { RouterProvider } from "react-router";
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';


function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer limit={3} />
      
    </>
  );
}

export default App;
