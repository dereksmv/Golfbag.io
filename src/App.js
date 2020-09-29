import React from 'react';
import CreateABag from "./pages/CreateABag/CreateABag"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="bg-gray-200">
        <Router>
          <Route path="/" component={CreateABag}/>
        </Router>
    </div>
  );
}
export default App;