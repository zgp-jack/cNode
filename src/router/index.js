import React, {Component} from "react";
import {Switch,Route,Redirect} from "react-router-dom";

import Index from "../view/index";
import Details from "../view/details";
import User from "../view/user";
import About from "../view/about";
import Book from "../view/book";

class RouterIndex extends Component {
    render() {
        return (
            <Switch>
                <Route path="/index/:id" component={Index} />
                <Route path="/book" component={Book} />
                <Route path="/about" component={About} />
                <Route path="/user/:id" component={User} />
                <Route path="/details/:id" component={Details} />
                <Route path="/*" exact render={() => (<Redirect to="/index/all"/>) }/>
            </Switch>
        )
    }
};
export default RouterIndex;

