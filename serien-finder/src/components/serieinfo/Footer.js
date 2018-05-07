import React from 'react';
import {Link} from 'react-router-dom';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';

class Footer extends React.Component {
    render() {
        return (
            <FlatButton
              label="Zurück"
              containerElement={<Link to="/series" />}
            />
        );
    }
}

export default muiThemeable()(Footer);
