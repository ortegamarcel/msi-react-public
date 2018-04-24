import React from 'react';
import logo from '../../../logo.svg';

export default class RotatingReactIcon extends React.Component {
    getStyle() {
        const width = this.props.width || 100;
        const height = this.props.height || 100;
        
        return {
            width: width + "px",
            height: height + "px"
        }
    }
    
    render() {
        return (
            <div class="rotating-react-icon" style={this.getStyle()}>
                <img id="react-icon-img" src={logo} />
            </div>
        );
    }
}