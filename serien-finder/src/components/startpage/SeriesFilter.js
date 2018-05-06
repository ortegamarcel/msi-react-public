import React from 'react';

import Filter from '../../model/Filter';
import FilterStore from '../../stores/FilterStore';
import SeriesStore from '../../stores/SeriesStore';
import * as FilterActions from '../../actions/FilterActions';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {CloseIcon} from 'mdi-react';

class SeriesFilter extends React.Component {
    constructor() {
        super();
        const series = SeriesStore.getAll();
        const titles = this.getTitles(series);
        const tags = this.getTags(series);
        this.state = {
            titleFilter: FilterStore.titleFilter,
            descriptionFilter: FilterStore.descriptionFilter,
            titles,
            tags
        };
        this.updateDataSources();

        this.update = this.update.bind(this);
        this.updateDataSources = this.updateDataSources.bind(this);
    }

    componentWillMount() {
        FilterStore.on("changed", this.update);
        SeriesStore.on("changed", this.updateDataSources);
    }

    componentWillUnmount() {
        FilterStore.removeListener("changed", this.update);
        SeriesStore.removeListener("changed", this.updateDataSources);
    }

    update() {
        this.setState({
            titleFilter: FilterStore.titleFilter,
            descriptionFilter: FilterStore.descriptionFilter
        });
    }

    handleTitleFilterChanged(searchText, dataSrouce, params) {
        FilterActions.setTitleFilter(searchText);
    }

    handleDescriptionFilterChanged(searchText, dataSrouce, params) {
        FilterActions.setDescriptionFilter(searchText);
    }

    resetFilter(e) {
        FilterActions.resetAllFilter();
        this.refs[`titleFilter`].setState({searchText:''});
    }

    // Calls automatically when series store was changed
    updateDataSources() {
        const series = SeriesStore.getAll();
        const titles = this.getTitles(series);
        const tags = this.getTags(series);

        this.setState({titles, tags});
    }

    getTitles(series) {
        return series.map(serie => {
            return serie.title;
        });
    }

    getTags(series) {
        const tags2D = series.map(serie => {
            return serie.tags;
        });

        let tags = [];
        for (let i = 0; i < tags2D.length; i++) {
            tags = tags.concat(tags2D[i]);
        }
        return tags;
    }

    filterFunction(searchText, key) {
        console.log(searchText, searchText.constructor, key);
        if (searchText.constructor === String) {
            return new Filter(searchText).match(key);
        } else if (searchText.constructor === Filter) {
            return searchText.match(key);
        } else {
            return true;
        }
    }

    render() {
        const {titleFilter, titles, tags} = this.state;
        const {muiTheme} = this.props;
        const {palette} = muiTheme;

        return (
            <Toolbar>
                <ToolbarGroup firstChild={false}>
                    <ToolbarTitle text="Filter" />
                </ToolbarGroup>
                <ToolbarGroup>
                    <AutoComplete
                      ref={`titleFilter`}
                      hintText="Nach Titel suchen"
                      dataSource={titles}
                      onUpdateInput={this.handleTitleFilterChanged.bind(this)}
                      filter={this.filterFunction.bind(this)}
                      maxSearchResults={5}
                      openOnFocus={true}
                    />
                    <IconButton onClick={this.resetFilter.bind(this)} tooltip="Alle Filter entfernen">
                        <CloseIcon color={palette.textColor} />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default muiThemeable()(SeriesFilter);

/*
<label for="titleFilter">Title</label>
<input id="titleFilter" value={this.state.titleFilter.toString()} onChange={this.handleTitleFilterChanged.bind(this)} />
<label for="descriptionFilter">Beschreibung</label>
<input id="descriptionFilter" value={this.state.descriptionFilter.toString()} onChange={this.handleDescriptionFilterChanged.bind(this)} />
<button onClick={this.resetFilter.bind(this)}>Reset Filter</button>
*/
