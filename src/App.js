import React from 'react';
import CreateABag from "./pages/CreateABag/CreateABag"
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainNav from './components/navigation/mainNav';
import CreateAGolfer from './pages/CreateABag/CreateAGolfer';
import PlayersView from "./pages/CreateABag/PlayersView"
import {Container} from "@material-ui/core";
import Header from "./components/layout/Header";
import Homepage from "./pages/Homepage";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme/theme";
import styled from "styled-components";

const AppWrapper = styled.div`
  background-color: ${theme.palette.background.default}  
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppWrapper>
        <Header/>
        <main>
          <Container maxWidth={'mg'}>
            <Router>
              <Route path="/" component={Homepage} exact/>
              <Route path="/create/Bag" component={CreateABag}/>
              <Route path="/create/Golfer" component={CreateAGolfer}/>
              <Route path="/players" component={PlayersView}/>
            </Router>
          </Container>
        </main>
      </AppWrapper>
    </ThemeProvider>
  );
}

export default App;