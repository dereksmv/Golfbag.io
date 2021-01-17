import React from 'react';
import CreateABag from "./pages/CreateABag/CreateABag"
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNav from './components/navigation/mainNav';
import CreateAGolfer from './pages/CreateABag/CreateAGolfer';
import playerCard from "./components/cards/playerCard";

function App() {
  return (
    <div className="bg-gray-200">
      <MainNav/>
        <Router>
          <Route path="/create/Bag" component={CreateABag}/>
          <Route path="/create/Golfer" component={CreateAGolfer}/>
          <Route path="/players" component={playerCard}/>
        </Router>
    </div>
  );
}

export default App;