import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import OwnerLogin from './components/OwnerLogin';
import Owner from './components/Owner';
import Inventory from './components/Inventory';

function App() {
  return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage/>}></Route>
            <Route exact path= '/landingpage' element ={<LandingPage/>}></Route>
            <Route exact path= '/ownerlogin' element ={<OwnerLogin/>}></Route>
            <Route exact path= '/owner' element ={<Owner/>}></Route>
            <Route exact path= '/inventory' element ={<Inventory/>}></Route>
          </Routes>
        </Router>
      </div>
  );
}

export default App;
