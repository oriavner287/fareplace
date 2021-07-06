import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Home from '@src/views/Home'
import ItemPage from '@src/views/ItemPage'

function Router() {
    return (
        <Switch>
            <Route path="/item/:id" exact component={ItemPage} />
            <Route path="/" exact component={Home} />
            <Redirect to="/" />
        </Switch>
    )
}

export default Router
