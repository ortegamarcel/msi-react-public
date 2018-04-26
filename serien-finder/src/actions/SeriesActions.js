import dispatcher from '../dispatcher/dispatcher';
import Genres from '../enums/Genres';

export function reloadSeries() {
    dispatcher.dispatch({type: "FETCH_SERIES"});
    setTimeout(() => {
        dispatcher.dispatch({
            type: "RECEIVE_SERIES",
            series: [{
                id: 0,
                title: "Z Nation",
                description: "Postapokalyptische Zombie Serie.",
                start_year: null,
                end_year: null,
                genres: [
                    Genres.ABENTEUER,
                    Genres.DRAMA,
                    Genres.Horror],
                land: "USA",
                rating: 8,
                tags: ["postapokalypse", "zombies"]
            }]
        });
    }, 1000);
}

export function addSerie(serie) {
  dispatcher.dispatch({type: "ADD_SERIE", serie})
}
