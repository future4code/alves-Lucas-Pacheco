import logo from './logo.svg';
import { GlobalState } from './global/GlobalState';
import Router from './routes/Router';
function App() {
  return (
    <GlobalState>
      <Router />
    </GlobalState>
  );
}

export default App;
