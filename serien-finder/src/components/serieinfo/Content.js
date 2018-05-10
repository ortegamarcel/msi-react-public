import React from 'react';

import DefaultInfo from './content/DefaultInfo';
import { Rating } from 'material-ui-rating'
import muiThemeable from 'material-ui/styles/muiThemeable';
import Divider from 'material-ui/Divider';

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.serieInfoStyle = {
            color: this.props.muiTheme.palette.accent1Color
        };
    }

    render() {
        const {muiTheme, serie} = this.props;
        const {palette} = muiTheme;

        return (
            <div style={{color: palette.textColor, marginTop:"10px"}}>
                <p>{serie.description}</p>
                <Divider />
                <Rating value={serie.rating} max={10} readOnly={true} />
                <Divider />
                <DefaultInfo name="Bewertung">
                    {serie.rating ? serie.rating+"/10" : "Nicht Gewertet"}
                </DefaultInfo>
                <DefaultInfo name="Erstaustrahlung">
                    {serie.start_year ? serie.start_year : "unbekannt"}
                </DefaultInfo>
                <DefaultInfo name="Letztausstrahlung">
                    {serie.end_year ? serie.end_year : "unbekannt"}
                </DefaultInfo>
                <DefaultInfo name="Tags">
                    {serie.tags.length > 0 ? serie.tags.join(', ') : "keine"}
                </DefaultInfo>
            </div>
        );
    }
}

export default muiThemeable()(Content);
