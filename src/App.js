import React from 'react';
import CreateABag from "./pages/CreateABag/CreateABag"
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainNav from './components/navigation/mainNav';

function App() {
  return (
    <div className="bg-gray-200">
      <MainNav/>
        <Router>
          <Route path="/" component={CreateABag}/>
        </Router>
    </div>
  );
}
export default App;