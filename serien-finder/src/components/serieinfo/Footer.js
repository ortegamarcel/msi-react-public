import React from 'react';
import BackLink from '../BackLink';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';

class Footer extends React.Component {
    render() {
        return (
            <FlatButton
              label="Zurück"
              containerElement={<BackLink context={this} />}
            />
        );
    }
}

export default muiThemeable()(Footer);
