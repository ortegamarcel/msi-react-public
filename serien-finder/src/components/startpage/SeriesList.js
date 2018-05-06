import React from 'react';

import Serie from './Serie';
import muiThemeable from 'material-ui/styles/muiThemeable';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class SeriesList extends React.Component {
    renderSeriesComponents() {
        const { series } = this.props;

        return series.map((serie) => {
            return (
                <TableRow>
                    <TableRowColumn>{serie.title}</TableRowColumn>
                    <TableRowColumn>{serie.genres.join(', ')}</TableRowColumn>
                </TableRow>
            );
        });
    }

    render() {
        return (
            <Table>
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
            </Table>
        );
    }
}

export default muiThemeable()(SeriesList);
