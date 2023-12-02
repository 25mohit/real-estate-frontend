import './App.css';
import './Style.css';
import { BrowserRouter as Router } from "react-router-dom"
import AllRoutes from './Routes';

function App() {
  return (
    <div className="App">
      <Router>
          <AllRoutes />
      </Router>
    </div>
  );
}

export default App;
