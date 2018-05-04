import React from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

import Paper from 'material-ui/Paper';
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
        const style = {
            display: "block",
            width: "100%",
            minHeight: "500px"
        };

        return (
            <MuiThemeProvider muiTheme={getMuiTheme(muiTheme)}>
                <Paper style={style} rounded={false}>
                    <Nav />
                    {this.props.children}
                    <Footer copyright={this.state.copyright} />
                </Paper>
            </MuiThemeProvider>
        );
    }
}

// <Header title={this.state.title} />
