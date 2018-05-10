import React from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';

class DefaultInfo extends React.Component {
    render() {
        const {muiTheme, name, children} = this.props;
        const {palette} = muiTheme;
        const styles = {
            nameStyle: {
                color: palette.secondaryText
            },
            serieInfoStyle: {
                color: palette.accent1Color
            }
        };

        return (
            <p>
                <span style={styles.nameStyle}>
                    {name}:&nbsp;
                </span>
                <span style={styles.serieInfoStyle}>
                    {children}
                </span>
            </p>
        );
    }
}

export default muiThemeable()(DefaultInfo);
