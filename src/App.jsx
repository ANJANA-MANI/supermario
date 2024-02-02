import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './Landing';
import Home from './Home';
import './Mario.css';
import './Mushroom.css';
import './Coins.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Home' element={<Home />} />
      </Routes>
    </div>
  );
}

function Main() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}

export default Main;
