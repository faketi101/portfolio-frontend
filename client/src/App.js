import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/style.css";
import "./js/customize";
// import Brigate from "./pages/works/Brigate/index";
// Page Components
import Main_Index from "./pages/Main_Index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main_Index} />
          {/* <Route exact path="/work/brigate" component={Brigate} /> */}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
