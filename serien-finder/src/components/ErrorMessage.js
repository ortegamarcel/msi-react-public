import React from 'react';

import BackLink from './BackLink';

export default class ErrorMessage extends React.Component {
    getStyle() {
        return {
            color: "red",
            fontWeight: 700
        };
    }
    
    render() {
        return (
            <div style={this.getStyle()}>
                {this.props.msg} <br/>
                <BackLink context={this} />
            </div>
        );
    }
}