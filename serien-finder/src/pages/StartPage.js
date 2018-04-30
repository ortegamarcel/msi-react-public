import React from 'react';

import SeriesList from '../components/startpage/SeriesList';
import SeriesFilter from '../components/startpage/SeriesFilter';
import SeriesStore from '../stores/SeriesStore';
import FilterStore from '../stores/FilterStore';

export default class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            series: SeriesStore.getAll(),
            filters: {
                title: FilterStore.titleFilter,
                description: FilterStore.descriptionFilter
            },
            filteredSeries: SeriesStore.getAll()
        };
        this.updateFilters();
        this.updateFilteredSeries();

        this.reloadSeries = this.reloadSeries.bind(this);
    }

    componentWillMount() {
        SeriesStore.on("changed", this.reloadSeries);
        FilterStore.on("changed", this.reloadSeries);
    }

    componentWillUnmount() {
        SeriesStore.removeListener("changed", this.reloadSeries);
        FilterStore.removeListener("changed", this.reloadSeries);
    }

    reloadSeries() {
        this.setState({
            series: SeriesStore.getAll()
        });
        this.updateFilters();
        this.updateFilteredSeries();
    }

    updateFilters() {
        this.setState({
            filters: {
                title: FilterStore.titleFilter,
                description: FilterStore.descriptionFilter
            }
        });
    }

    updateFilteredSeries() {
        const {series, filters} = this.state;
        const {title, description} = filters;
        let filteredSeries = series;

        filteredSeries = filteredSeries.filter((serie) => {
            return title ? title.match(serie.title) : true;
        });

        filteredSeries = filteredSeries.filter((serie) => {
            return description ? description.match(serie.description) : true;
        });

        this.setState({filteredSeries});
    }

    render() {
        return (
            <div>
                <h3>Alle Serien ({this.state.filteredSeries.length}/{this.state.series.length}):</h3>
                <SeriesFilter />
                <SeriesList series={this.state.filteredSeries} />
            </div>
        );
    }
}
