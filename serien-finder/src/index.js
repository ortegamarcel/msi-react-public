import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './pages/Layout';
import StartPage from './pages/StartPage';
import Settings from './pages/Settings';
import AddSerie from './pages/AddSerie';
import SerieInfo from './pages/SerieInfo';

ReactDOM.render(
    <Router>
        <Layout>
            <Switch>
                <Route exact path="/" component={StartPage} />
                <Route exact path="/settings" component={Settings} />
                <Route exact path="/series" component={StartPage} />
                <Route exact path="/serie/:id" component={SerieInfo} />
                <Route exact path="/addserie" component={AddSerie} />
            </Switch>
        </Layout>
    </Router>,
    document.getElementById('root')
);