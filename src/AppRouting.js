import { Route } from "react-router";
import Home from "./views/Home/Home";
import Biography from "./components/Biography";
export function appRoutes() {
  return [
    <Route exact path="/home">
      <Home></Home>
    </Route>,
    //   <Route path="/works">
    //     {/* <About /> */}
    //   </Route>
    <Route path="/biography">
        <Biography></Biography>
        </Route>,
    <Route></Route>,
  ];
}
