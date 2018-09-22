import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

const FourOFour = () => <h1>404 Not Found</h1>;

const App = () => (
    <BrowserRouter>
        <div className="app">
            <Switch>
                <Route exact path="/" component={Landing} />
                <Route path="/search" component={Search} />
                <Route component={FourOFour} />
            </Switch>
        </div>
    </BrowserRouter>
);

export default App;