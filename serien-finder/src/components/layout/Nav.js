import React from 'react';
import {Link} from 'react-router-dom';

export default class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><Link to="/series">Alle Serien</Link></li>
                    <li><Link to="/addserie">Serie Hinzufügen</Link></li>
                    <li><Link to="/settings">Einstellungen</Link></li>
                </ul>
            </nav>
        );
    }
}