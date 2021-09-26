import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Account/Login";
import HeaderNav from "./components/Home/HeaderNav";
import Register from "./components/Account/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
