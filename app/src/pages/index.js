import React from "react";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Home from "./home";

const Index = () => {
  return (
    <div className="App">
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default Index;
