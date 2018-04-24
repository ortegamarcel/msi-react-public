import React from 'react';

export default class BackLink extends React.Component {
    constructor(props) {
        super(props);
        
        if(this.props.context == null) {
            console.error("BackLink benötigt einen context!");
        }
    }
    
    goBack() {
        this.props.history.goBack();
    }
    
    render() {
        return (
            <button style={this.props.style} class={this.props.cssClass} onClick={this.goBack.bind(this.props.context)}>Zurück</button>
        );
    }
}