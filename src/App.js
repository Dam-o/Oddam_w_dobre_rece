import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Account/Login";
import HeaderNav from "./components/Home/HeaderNav";
import Register from "./components/Account/Register";
import LogOut from "./components/Account/LogOut";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/logowanie" component={Login} />
          <Route path="/rejestracja" component={Register} />
          <Route path="/wylogowano" component={LogOut} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
