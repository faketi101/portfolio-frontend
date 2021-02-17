import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./css/style.css";
import "./js/customize";

// Page Components
import Main_Index from "./pages/Main_Index";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main_Index} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
