import React from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import muiTheme from 'material-ui/styles/baseThemes/darkBaseTheme';

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Willkommen",
            copyright: "Erstellt von Marcel und Marvin, 2018"
        };
    }

    render() {
        return (
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <Nav />
                {this.props.children}
                <Footer copyright={this.state.copyright} />
            </MuiThemeProvider>
        );
    }
}

// <Header title={this.state.title} />
