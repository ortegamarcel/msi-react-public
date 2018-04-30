import { EventEmitter } from 'events';
import Genres from '../enums/Genres';
import dispatcher from '../dispatcher/dispatcher';

class SeriesStore extends EventEmitter {
    constructor() {
        super();
        this.series = [{
            id: 0,
            title: "Aftermath",
            description: "Der postapokalyptische Thriller dreht sich um das Paar Karen (Anne Heche) und Joshua Copeland (James Tupper) und deren drei Kinder Dana (Julia Sarah Stone), Brianna (Taylor Hickson) und Matt (Levi Meaden). Gemeinsam kämpfen sie um das Überleben, nachdem die Zivilisation von der Apokalypse dahingerafft wurde. Es ist von massiven Stürmen, Meteoriteneinschlägen, Erdbeben und Seuche die Rede, allerdings sollen auch übernatürlichen Kreaturen auftauchen. Joshua ist ein Professor für die Geschichte der Weltkulturen und somit einer der wenigen Menschen, die eine Chance haben, die Zusammenhänge der Apokalypse zu verstehen. Karen diente einst als Pilotin in der Air Force und setzt ihr Wissen nun ein, um das Überleben der Familie zu sichern.",
            start_year: 2016,
            end_year: null,
            genres: [
                Genres.ABENTEUER,
                Genres.DRAMA ],
            land: "USA",
            rating: 7,
            tags: ["postapokalypse"]
        }, {
            id: 1,
            title: "Rita",
            description: "Die Serie handelt von der 42-jährigen Mutter und Lehrerin Rita Madsen, die sehr eigensinnig und unkonventionell sowohl in ihrem Beruf als auch im sonstigen Leben ist. Rita ist geschieden und hat mit ihrem in London lebenden Ex-Ehemann 3 Kinder: Ricco, Molly und Jeppe. Ricco ist der älteste Sohn und heiratet im Laufe der 1. Staffel Bitten. Die Beiden leben in ihrer eigenen Wohnung und erwarten ihr erstes gemeinsames Kind. Molly ist arbeitslos und wohnt Zuhause bei ihrer Mutter. Sie ist Legasthenikerin und verfügt aufgrund dessen über wenig Selbstbewusstsein. Der homosexuelle Jeppe ist mit 15 Jahren das jüngste der 3 Kinder und geht noch zur Schule. Rasmus ist der Direktor der Schule, in der Rita arbeitet. Er ist in Rita verliebt, jedoch erwidert diese seine Gefühle nicht.",
            start_year: 2012,
            end_year: null,
            genres: [
                Genres.DRAMEDY ],
            land: "Dänemark",
            rating: 8,
            tags: ["schule"]
        }, {
            id: 2,
            title: "Einstein",
            description: "Felix Winterberg, unehelicher Ururenkel von Albert Einstein, ist der jüngste Professor, der an der Bochumer Universität theoretische Physik unterrichtet. Felix hat die Genialität von Einstein geerbt und leidet an der tödlichen Krankheit Chorea Huntington, die ihm eine restliche Lebenserwartung von ungefähr sieben Jahren gewährt. Er muss als Berater unter der Leitung von Oberkommissar Stefan Tremmel der Kommissarin Elena Lange bei den Aufklärungen von Mordfällen helfen, um nicht wegen Verstößen gegen das Betäubungsmittelgesetz (unerlaubter Amphetaminbesitz) im Gefängnis zu landen.",
            start_year: 2015,
            end_year: null,
            genres: [
                Genres.KRIMI ],
            land: "Deutschland",
            rating: 6,
            tags: []
        }];
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
