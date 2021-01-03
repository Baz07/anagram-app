import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import AnagramDashboardPage from './components/AnagramDashboardPage'
import Header from './components/Header'
import NotFoundPage from './components/NotFoundPage'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path ="/" component={AnagramDashboardPage} exact={true}/>
                <Route component={NotFoundPage}/>
            </Switch>  
        </div>      
    </BrowserRouter>
)

export default AppRouter