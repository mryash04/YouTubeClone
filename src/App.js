import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Header from "./components/Header";
import Category from "./components/Category";
import HomeInfo from "./components/HomeInfo";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path= "/search">
            <Header />
            <SearchResult />
          </Route>
          <Route path="/">
          <Header />
          <Category />
          <HomeInfo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
