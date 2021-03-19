import { Route } from "react-router";
import Home from "./views/Home/Home";
import Biography from "./views/Biography/Biography";
import Works from "./views/Works/Works";
export function appRoutes() {
  return [
    <Route exact path="/home">
      <Home></Home>
    </Route>,
    <Route path="/works">
      <Works></Works>
    </Route>,
    <Route path="/biography">
        <Biography></Biography>
    </Route>,
    <Route exact path="/">
    <Home></Home>
    </Route>,
  ];
}
