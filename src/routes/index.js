import React from 'react'
import Home from '../pages/Home'
import Main from '../pages/Main'
import Cart from '../pages/Cart'
import Details from '../pages/Details'
import { Switch, Route, useLocation } from 'react-router-dom'

export default function index() {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/main">
                <Main />
            </Route>
            <Route path="/cart">
                <Cart />
            </Route>
            <Route path='/details/:id/:name' >
                <Details />
            </Route>
            <Route path="*">
                <div>
                    404
          </div>
            </Route>
        </Switch>
    )
}
