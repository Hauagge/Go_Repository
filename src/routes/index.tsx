import React from 'react'
import {Switch, Route} from 'react-router-dom'

import DashBoard from '../pages/dashboard/index'
import Repository from '../pages/repository/index'

const Routes:React.FC = ()=>(
  <Switch>
    <Route path="/" exact component={DashBoard}/>
    <Route path="/repository/:repository+"  component={Repository}/>
  </Switch>
)
export default Routes;
