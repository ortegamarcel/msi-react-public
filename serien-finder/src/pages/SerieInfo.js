import React from 'react';

import SeriesStore from '../stores/SeriesStore';
import ErrorMessage from '../components/ErrorMessage';
import BackLink from '../components/BackLink';
import Header from '../components/serieinfo/Header';
import Content from '../components/serieinfo/Content';
import Footer from '../components/serieinfo/Footer';

import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';

import '../styles/paper.css';

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
            <Paper
              className="default-paper default-layout-paper"
              rounded={false}
              zDepth={0}
            >
                <Header title={serie.title} genres={serie.genres} land={serie.land} />
                <Content serie={serie} />
                <Divider />
                <Footer />
            </Paper>
        );
    }
}

/*
<h2>{serie.title}</h2>
Genres: {serie.genres.join(", ")} <br/>
Beschreibung: {serie.description} <br/>
<BackLink context={this} />
*/
