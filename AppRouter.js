import React from 'react'
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom'
import AnagramDashboardPage from '../components/AnagramDashboardPage'
import AnagramAboutPage from '../components/AnagramAboutPage'
import AnagramQueryPage from '../components/AnagramQueryPage'
import Header from '../components/Header'
import NotFoundPage from '../components/NotFoundPage'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path ="/" component={AnagramDashboardPage} exact={true}/>
                <Route path ="/about" component={AnagramAboutPage}/>
                <Route component={NotFoundPage}/>
            </Switch>  
        </div>      
    </BrowserRouter>
)

export default AppRouter