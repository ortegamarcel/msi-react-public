import React from 'react';

import SeriesList from '../components/startpage/SeriesList';
import SeriesStore from '../stores/SeriesStore';

export default class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            series: SeriesStore.getAll()
        };
    }
    
    render() {        
        return (
            <div>
                <h3>Alle Serien ({this.state.series.length}):</h3>
                <SeriesList series={this.state.series} />
            </div>
        );
    }
}