import React from 'react';

import Serie from './Serie';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class SeriesList extends React.Component {
    renderSeriesComponents() {
        const { series } = this.props;

        return series.map((serie) => {
            return (
                <li>
                    <Serie key={serie.id} serie={serie} />
                </li>
            );
        });
    }

    render() {
        return (
            <Table>
            <TableHeader>
                <TableRow>
                    <TableHeaderColumn>Serie</TableHeaderColumn>
                    <TableHeaderColumn>Genres</TableHeaderColumn>
                </TableRow>
            </TableHeader>
            <TableBody>
                
            </TableBody>
            </Table>
        );
    }
}
