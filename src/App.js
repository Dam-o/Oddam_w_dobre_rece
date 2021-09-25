import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Account/Login";
import HeaderNav from "./components/Home/HeaderNav";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route paty="/logowanie" component={Login} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
