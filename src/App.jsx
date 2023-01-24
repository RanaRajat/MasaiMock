import './App.css';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './component/Navbar';
import About from './component/About';
import RoutesPage from './component/Routes';

function App() {
  return (
    <BrowserRouter>
    <RoutesPage/> 
    </BrowserRouter>
  );
}

export default App;
