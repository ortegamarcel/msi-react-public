import React from 'react';
import {Link} from 'react-router-dom';

import Serie from './Serie';

import muiThemeable from 'material-ui/styles/muiThemeable';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import {List, ListItem} from 'material-ui/List';

import '../../styles/paper.css';

class SeriesList extends React.Component {
    constructor() {
        super();
        this.offset = 210; // ~210 == height from header and footer
        this.state = { height: window.innerHeight - this.offset };
        this.updateListHeight = this.updateListHeight.bind(this);
    }

    componentDidMount() {
        this.updateListHeight();
        window.addEventListener('resize', this.updateListHeight);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateListHeight);
    }

    updateListHeight() {
        this.setState({height: window.innerHeight - this.offset});
    }

    renderSeriesComponents() {
        const { series } = this.props;

        return series.map((serie) => {
            return (
                <div>
                    <ListItem
                      containerElement={<Link to={"/serie/" + serie.id} />}
                      primaryText={serie.title}
                      secondaryText={serie.genres.join(', ')}
                    />
                    <Divider />
                </div>
            );
        });
    }

    render() {
        const style = {
            width: "100%",
            height: this.state.height,
            overflowY: 'auto'
        };

        return (
            <Paper rounded={false} className="default-paper" zDepth={0} >
                <div style={style}>
                    <List>
                        <Divider />
                        {this.renderSeriesComponents()}
                    </List>
                </div>
            </Paper>
        );
    }
}

export default muiThemeable()(SeriesList);
