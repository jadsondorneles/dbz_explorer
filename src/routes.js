import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import Home from './pages/Home'
import Planets from './pages/Planets'
import Fighters from './pages/Fighters'
import Error404 from './pages/Error404'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/Planets" component={Planets}  />
      <Route exact path="/Planets/:name" component={Planets}  />
      <Route exact path="/Fighters" component={Fighters} />
      <Route exact path="/Fighters/:name" component={Fighters} />
      <Route path="*" component={Error404} />
    </Switch>
  </BrowserRouter>
)

export default Routes