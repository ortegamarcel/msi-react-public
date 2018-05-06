import { EventEmitter } from 'events';
import Genres from '../enums/Genres';
import dispatcher from '../dispatcher/dispatcher';
import series from '../data/series';

class SeriesStore extends EventEmitter {
    constructor() {
        super();
        this.series = series;
    }

    getAll() {
        return this.series;
    }

    getFiltered(filterFunc) {
        return this.series.map(filterFunc);
    }

    // Finds serie(s) by title
    // param title - RegExp or string
    findByTitle(title) {
        if (title == null) { return this.getAll(); }
        if (title.constructor !== RegExp && title.constructor !== String) {
            return null;
        }

        let regex = title;
        if (title.constructor === String) {
            regex = new RegExp(title);
        }
        return this.getFiltered((serie) => {
            if (regex.test(serie.title)) {
                return serie;
            }
        });
    }

    // Find all series that contain the text in their title or description
    // param text - typeof String or RegExp
    findByText(text) {
        if (text == null) { return this.getAll(); }
        if (text.constructor !== RegExp && text.constructor !== String) {
            return null;
        }

        let regex = text;
        if (text.constructor === String) {
            regex = new RegExp(text);
        }
        return this.getFiltered((serie) => {
            if (regex.test(serie.title) || regex.test(serie.description)) {
                return serie;
            }
        });
    }

    findById(id) {
        if (id == null) {
            console.log("Ungültige ID.");
            return null;
        }
        return this.series.filter((serie) => {
            return serie.id == id;
        })[0];
    }

    // param series - one or more series
    push(series) {
        this.series.push(series);
        this.emit("changed");
    }

    handleActions(action) {
        switch (action.type) {
            case "FETCH_SERIES": {
                this.emit({type: "fetching_series"});
            }

            case "RECEIVE_SERIES": {
                this.push(action.series);
            }

            case "ADD_SERIE": {
                this.push(action.serie);
            }
        }
    }
}

const seriesStore = new SeriesStore;
dispatcher.register(seriesStore.handleActions.bind(seriesStore));
export default seriesStore;
