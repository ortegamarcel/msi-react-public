import React from 'react';
import FilterStore from '../../stores/FilterStore';
import * as FilterActions from '../../actions/FilterActions';

export default class SeriesFilter extends React.Component {
    constructor() {
        super();
        this.state = {
            titleFilter: FilterStore.titleFilter,
            descriptionFilter: FilterStore.descriptionFilter
        };
        this.update = this.update.bind(this);
    }

    componentWillMount() {
        FilterStore.on("changed", this.update);
    }

    componentWillUnmount() {
        FilterStore.removeListener("changed", this.update);
    }

    update() {
        this.setState({
            titleFilter: FilterStore.titleFilter,
            descriptionFilter: FilterStore.descriptionFilter
        });
    }

    handleTitleFilterChanged(e) {
        FilterActions.setTitleFilter(e.target.value);
    }

    handleDescriptionFilterChanged(e) {
        console.log(e.target.value);
        FilterActions.setDescriptionFilter(e.target.value);
    }

    resetFilter(e) {
        FilterActions.resetAllFilter();
    }

    render() {
        return (
            <div>
                <div>Filtern...</div>
                <label for="titleFilter">Title</label>
                <input id="titleFilter" value={this.state.titleFilter.toString()} onChange={this.handleTitleFilterChanged.bind(this)} />
                <label for="descriptionFilter">Beschreibung</label>
                <input id="descriptionFilter" value={this.state.descriptionFilter.toString()} onChange={this.handleDescriptionFilterChanged.bind(this)} />
                <button onClick={this.resetFilter.bind(this)}>Reset Filter</button>
            </div>
        );
    }
}
