import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import {HomeIcon, SettingsIcon} from 'mdi-react';

import muiThemeable from 'material-ui/styles/muiThemeable';

import Link from 'react-router-dom/Link';

class Nav extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        };
    }

    toggleMenu() {
        this.setState({open: !this.state.open});
    }

    closeMenu() {
        this.setState({open: false});
    }

    createMenuItem(name, link, RightIcon) {
        return (
            <MenuItem
              onClick={this.closeMenu.bind(this)}
              containerElement={<Link to={link} />}
              rightIcon={RightIcon ? <RightIcon color={this.props.muiTheme.palette.secondaryTextColor} /> : null}
            >{name}</MenuItem>
        );
    }

    getMenuItems() {
        return [
            this.createMenuItem("Startseite", "/", HomeIcon),
            this.createMenuItem("Alle Serien", "/series"),
            this.createMenuItem("Serie hinzufügen", "/addserie"),
            <Divider />,
            this.createMenuItem("Einstellungen", "/settings", SettingsIcon)
        ];
    }

    render() {
        return (
            <AppBar
              title={this.props.title}
              onLeftIconButtonClick={this.toggleMenu.bind(this)}
            >
                <Drawer
                  docked={false}
                  width={220}
                  open={this.state.open}
                  openSecondary={false}
                  onRequestChange={(open) => this.setState({open})}
                >
                    <AppBar title="Menü" />
                    {this.getMenuItems()}
                </Drawer>
            </AppBar>
        );
    }
}

export default muiThemeable()(Nav);

/*
<nav>
    <ul>
        <li><Link to="/series">Alle Serien</Link></li>
        <li><Link to="/addserie">Serie Hinzufügen</Link></li>
        <li><Link to="/settings">Einstellungen</Link></li>
    </ul>
</nav>
*/
