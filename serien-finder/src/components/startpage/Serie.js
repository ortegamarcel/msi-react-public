import React from 'react';
import {Link} from 'react-router-dom';

export default class Serie extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        const { serie } = this.props;
        
        return (
            <li><Link to={"/serie/"+serie.id}>{serie.title}</Link> [{serie.genres.join(', ')}]</li>
        );
    }
}