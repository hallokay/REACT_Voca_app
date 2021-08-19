import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import { HashRouter, Switch, Route } from "react-router-dom";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";


 function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route exact path="/day/:day">
            <Day />
          </Route>
          <Route path="/create_word">
            <CreateWord />
          </Route>
          <Route path="/create_day">
            <CreateDay />
          </Route>
          <Route path="/">
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
