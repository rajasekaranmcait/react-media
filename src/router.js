import React, { Component } from 'react';
import { Route, Switch } from "react-router";
import { BrowserRouter } from 'react-router-dom';
import Home from './Componens/Pages/Home';
import Favourites from './Componens/Pages/Favourites';
import MediaDetails from './Componens/Pages/MediaDetails';
import Layout from './Componens/Layout';

class Router extends Component {

    render() {
        return (
            <React.Fragment>
                <BrowserRouter>
                    <Layout>
                        <Switch>
                            <Route exact path='/' render={(props) => < Home {...props} />} />
                            <Route exact path='/favourites' render={(props) => < Favourites {...props} />} />
                            <Route path='/:media/:mediaId' render={(props) => < MediaDetails {...props} />} />
                        </Switch>
                    </Layout>
                </BrowserRouter>
            </React.Fragment>
        )
    }
}
export default Router;