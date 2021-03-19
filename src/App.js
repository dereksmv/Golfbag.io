import React from 'react';
import CreateABag from "./pages/CreateABag/CreateABag"
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainNav from './components/navigation/mainNav';
import CreateAGolfer from './pages/CreateABag/CreateAGolfer';
import PlayersView from "./pages/CreateABag/PlayersView"
import {Container} from "@material-ui/core";
import Header from "./components/layout/Header";

function App() {
  return (
    <div className="bg-gray-200">
      <Header />
      <main>
        <Container>
          <Router>
            <Route path="/create/Bag" component={CreateABag}/>
            <Route path="/create/Golfer" component={CreateAGolfer}/>
            <Route path="/players" component={PlayersView}/>
          </Router>
          <p>Homepage...</p>
        </Container>
      </main>
      <MainNav/>
    </div>
  );
}

export default App;