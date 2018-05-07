import React from 'react';
import {Link} from 'react-router-dom';
//import BackLink from '../BackLink';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';

class Footer extends React.Component {
    render() {
        return (
            <div>
                <FlatButton
                  label="Zurück"
                  containerElement={<Link to="/series" />}
                />
            </div>
        );
    }
}

export default muiThemeable()(Footer);
