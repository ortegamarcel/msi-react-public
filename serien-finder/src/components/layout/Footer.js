import React from 'react';

export default class Footer extends React.Component {
    getStyle() {
        return {
            fontSize: "9pt",
            color: "#666",
            marginTop: "50px"
        };
    }
    
    render() {
        return (
            <footer style={this.getStyle()}>
                <em>© {this.props.copyright}</em>
            </footer>
        );
    }
}