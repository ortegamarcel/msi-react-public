import React from 'react';

import SeriesStore from '../stores/SeriesStore';
import ErrorMessage from '../components/ErrorMessage';
import BackLink from '../components/BackLink';

export default class SerieInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            serie: SeriesStore.findById(props.match.params.id)
        }
    }

    render() {
        const {serie} = this.state;

        if (serie == null) {
            return <ErrorMessage msg={"Serie mit der id " + this.props.match.params.id + " konnte nicht gefunden werden."} />;
        }

        return (
            <div>
                <h3>{serie.title}</h3>
                Genres: {serie.genres.join(", ")} <br/>
                Beschreibung: {serie.description} <br/>
                <BackLink context={this} />
            </div>
        );
    }
}
