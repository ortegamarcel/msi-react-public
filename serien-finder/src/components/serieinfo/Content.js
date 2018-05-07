import React from 'react';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Divider from 'material-ui/Divider';

class Content extends React.Component {
    render() {
        const {muiTheme, serie} = this.props;
        const {palette} = muiTheme;
        const serieInfoStyle = {
            color: palette.accent1Color
        }
        console.log(palette);

        return (
            <div style={{color: palette.textColor}}>
                <p>{serie.description}</p>
                <Divider />
                <p>Erstaustrahlung:&nbsp;
                    <span style={serieInfoStyle}>
                        {serie.start_year ? serie.start_year : "unbekannt"}
                    </span>
                </p>
                <p>Letztausstrahlung:&nbsp;
                    <span style={serieInfoStyle}>
                        {serie.end_year ? serie.end_year : "unbekannt"}
                    </span>
                </p>
                <p>Tags:&nbsp;
                    <span style={serieInfoStyle}>
                        {serie.tags.length > 0 ? serie.tags.join(', ') : "keine"}
                    </span>
                </p>
            </div>
        );
    }
}

export default muiThemeable()(Content);
