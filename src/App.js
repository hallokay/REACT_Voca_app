import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import EmptyPage from "./components/EmptyPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import CreateWord from "./components/CreateWord";
import CreateDay from "./components/CreateDay";

function App() {
  return (
    <BrowserRouter basename="/react_voca_app">
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/">
            <DayList />
          </Route>
          <Route exact path="/day/:day">
            <Day />
          </Route>
          <Route exact path="/create_word">
            <CreateWord />
          </Route>
          <Route exact path="/create_day">
            <CreateDay />
          </Route>
          <Route path="/">
            <EmptyPage />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
