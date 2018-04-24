import React from 'react';

import Serie from './Serie';

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
            <ul>
                {this.renderSeriesComponents()}
            </ul>
        );
    }
}