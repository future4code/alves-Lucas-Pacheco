
import Router from './routes/Router';
import { createGlobalStyle } from "styled-components"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  font-family: 'Kalam', cursive;
  min-width: 100%;
}
`

function App() {
  return (
    <div>
      <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      <GlobalStyle />
      
      <Router />

    </div>
  );
}

export default App;
