import React from 'react';

import Title from './Header/Title';
import RotatingReactIcon from './Header/RotatingReactIcon';

export default class Header extends React.Component {
    render() {
        return (
            <div class="header">
                <RotatingReactIcon />
                <Title title={this.props.title} />
            </div>
        );
    }
}