import React from 'react';

import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Nav from '../components/layout/Nav';

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
            <div>
                <Header title={this.state.title} />
                <Nav />
                {this.props.children}
                <Footer copyright={this.state.copyright} />
            </div>
        );
    }
}