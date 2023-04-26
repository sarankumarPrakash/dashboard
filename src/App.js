
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";

/*--------------------------- Components ------------------------*/
import Dashboard from './DashboardLayout/Home';
function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route exact path ='/' element={<Dashboard/>}/>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
