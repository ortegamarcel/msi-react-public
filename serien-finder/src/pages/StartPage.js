import React from 'react';

import SeriesList from '../components/startpage/SeriesList';
import SeriesFilter from '../components/startpage/SeriesFilter';
import SeriesStore from '../stores/SeriesStore';
import FilterStore from '../stores/FilterStore';

import muiThemeable from 'material-ui/styles/muiThemeable';

class StartPage extends React.Component {
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

        this.reloadSeries = this.reloadSeries.bind(this);
    }

    componentWillMount() {
        this.updateFilters();
        this.updateFilteredSeries();

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
                <SeriesFilter searchHits={this.state.filteredSeries.length} />
                <SeriesList series={this.state.filteredSeries} maxSeriesCount={this.state.series.length} />
            </div>
        );
    }
}

export default muiThemeable()(StartPage);
