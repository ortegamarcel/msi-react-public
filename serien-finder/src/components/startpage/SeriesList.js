import React from 'react';
import {Link} from 'react-router-dom';

import Serie from './Serie';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

class SeriesList extends React.Component {
    renderSeriesComponents() {
        const { series } = this.props;

        return series.map((serie) => {
            return (
                <div>
                    <ListItem
                      containerElement={<Link to={"/serie/" + serie.id} />}
                      primaryText={serie.title}
                      secondaryText={serie.genres.join(', ')}
                    />
                    <Divider />
                </div>
            );
        });
    }

    render() {
        const style = {
            display: "block",
            minHeight: "200px",
            width: "100%"
        }

        return (
            <Paper rounded={false} style={style} zDepth={0} >
                <List>
                    <Divider />
                    {this.renderSeriesComponents()}
                </List>
            </Paper>
        );
    }
}

export default muiThemeable()(SeriesList);

/*
<TableHeader>
    <TableRow>
        <TableHeaderColumn>
            Serien ({this.props.series.length}/{this.props.maxSeriesCount})
        </TableHeaderColumn>
        <TableHeaderColumn>Genres</TableHeaderColumn>
    </TableRow>
</TableHeader>
<TableBody>
    {this.renderSeriesComponents()}
</TableBody>
*/
