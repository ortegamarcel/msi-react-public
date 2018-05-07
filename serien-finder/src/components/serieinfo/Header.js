import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import '../../styles/headers.css';

class SerieInfo extends React.Component {
    render() {
        const {title, genres, land, muiTheme} = this.props;
        const {palette} = muiTheme;
        const titleStyle = {
            display: "inline-block",
            color: palette.accent1Color
        };
        const genresStyle = {
            display: "inline-block",
            marginLeft: "10px",
            color: palette.secondaryTextColor
        };
        const landStyle = {
            float: "right",
            color: palette.accent1Color
        }

        return (
            <div>
                <span style={titleStyle} className="header">{title}</span>
                <span style={genresStyle} className="header-suffix">- {genres.join(', ')}</span>
                <span style={landStyle} className="subheader">{land ? land : ""}</span>
            </div>
        );
    }
}

export default muiThemeable()(SerieInfo);
