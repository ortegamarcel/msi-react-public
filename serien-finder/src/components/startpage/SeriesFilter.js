import React from 'react';

import Filter from '../../model/Filter';
import FilterStore from '../../stores/FilterStore';
import SeriesStore from '../../stores/SeriesStore';
import * as FilterActions from '../../actions/FilterActions';

import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import AutoComplete from 'material-ui/AutoComplete';
import IconButton from 'material-ui/IconButton';
import TextField from 'material-ui/TextField';
import muiThemeable from 'material-ui/styles/muiThemeable';

import {CloseIcon} from 'mdi-react';

class SeriesFilter extends React.Component {
    constructor() {
        super();
        const series = SeriesStore.getAll();
        this.state = {
            titleFilter: FilterStore.titleFilter,
            descriptionFilter: FilterStore.descriptionFilter,
            series
        };
        this.updateDataSource();

        this.update = this.update.bind(this);
        this.updateDataSource = this.updateDataSource.bind(this);
    }

    componentWillMount() {
        FilterStore.on("changed", this.update);
        SeriesStore.on("changed", this.updateDataSource);
    }

    componentWillUnmount() {
        FilterStore.removeListener("changed", this.update);
        SeriesStore.removeListener("changed", this.updateDataSource);
    }

    componentDidMount() {
        if(FilterStore.titleFilter.toString() != "")
            this.refs[`titleFilter`].setState({searchText: FilterStore.titleFilter});
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

    handleDescriptionFilterChanged(e, newValue) {
        FilterActions.setDescriptionFilter(newValue);
    }

    resetFilter(e) {
        FilterActions.resetAllFilter();
        this.refs[`titleFilter`].setState({searchText:''});
    }

    // Calls automatically when series store was changed
    updateDataSource() {
        const series = SeriesStore.getAll();
        this.setState({series});
    }

    filterFunction(searchText, key) {
        if (searchText.constructor === String) {
            return new Filter(searchText).match(key);
        } else if (searchText.constructor === Filter) {
            return searchText.match(key);
        } else {
            return false;
        }
    }

    getTitle() {
        return "Serien Treffer: " + this.props.searchHits;
    }

    render() {
        const {titleFilter, series} = this.state;
        const {muiTheme, numOfFilteredSeries} = this.props;
        const {palette} = muiTheme;

        return (
            <Toolbar>
                <ToolbarGroup firstChild={false}>
                    <ToolbarTitle text={this.getTitle()} />
                </ToolbarGroup>
                <ToolbarGroup>
                    <AutoComplete
                      ref={`titleFilter`}
                      hintText="Nach Titel suchen"
                      dataSource={series}
                      dataSourceConfig={{text:'title', value:'id'}}
                      onUpdateInput={this.handleTitleFilterChanged.bind(this)}
                      filter={this.filterFunction.bind(this)}
                      maxSearchResults={5}
                      openOnFocus={true}
                    />
                    <ToolbarSeparator style={{opacity: 0}} />
                    <TextField
                      hintText="nach Schlagwörtern suchen"
                      value={this.state.descriptionFilter.toString()}
                      onChange={this.handleDescriptionFilterChanged.bind(this)}
                    />
                    <ToolbarSeparator />
                    <IconButton onClick={this.resetFilter.bind(this)} tooltip="Alle Filter entfernen">
                        <CloseIcon color={palette.textColor} />
                    </IconButton>
                </ToolbarGroup>
            </Toolbar>
        );
    }
}

export default muiThemeable()(SeriesFilter);
