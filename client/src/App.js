import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home"
import { PlayerSearch } from "./pages/PlayerSearch"
import { Odds } from "./pages/Odds"
import { Calculator } from "./pages/Calculator"
import './stylesheets/App.css'

function App() {
  return (
    <div className="main">
    <nav>
      {/* <div><button>BURGER</button></div> */}
      <div className="nav">
      <input className="checkbox" type="checkbox" name="" id="" />
        <button className="burger">
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
        </button>
        <ul className="menu">
          <li className="link"><button><Link to="/">Home</Link></button></li>
          <li className="link"><button><Link to="/PlayerSearch">Player</Link></button></li>
          <li className="link"><button><Link to="/Odds">Odds</Link></button></li>
          <li className="link"><button><Link to="/Calculator">Calculator</Link></button></li>
        </ul>
      </div>
    </nav>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/PlayerSearch" element={<PlayerSearch />}/>
    <Route path="/Odds" element={<Odds />}/>
    <Route path="/Calculator" element={<Calculator />}/>
  </Routes>
  </div>
  )
}

export default App;
