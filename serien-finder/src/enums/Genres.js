import { Enum } from 'enumify';

export default class Genres extends Enum {}
Genres.initEnum({
    ABENTEUER: {
        toString() { return "Abenteuer"; }
    },
    ACTION: {
        toString() { return "Action"; }
    },
    ANIMATION: {
        toString() { return "Animation"; }
    },
    ANIME: {
        toString() { return "Anime"; }
    },
    ANWALT: {
        toString() { return "Anwalt"; }
    },
    ARZT: {
        toString() { return "Arzt"; }
    },
    DRAMA: {
        toString() { return "Drama"; }
    },
    DRAMEDY: {
        toString() { return "Dramedy"; }
    },
    FAMILIE: {
        toString() { return "Familie"; }
    },
    FANTASY: {
        toString() { return "Fantasy"; }
    },
    HISTORY: {
        toString() { return "History"; }
    },
    HORROR: {
        toString() { return "Horror"; }
    },
    KOMOEDIE: {
        toString() { return "Komödie"; }
    },
    KRIMI: {
        toString() { return "Krimi"; }
    },
    MUSIK: {
        toString() { return "Musik"; }
    },
    MYSTERY: {
        toString() { return "Mystery"; }
    },
    ROMANZE: {
        toString() { return "Romanze"; }
    },
    SCIFI: {
        toString() { return "Science-Fiction"; }
    },
    SITCOM: {
        toString() { return "Sitcom"; }
    },
    THRILLER: {
        toString() { return "Thriller"; }
    },
    WESTERN: {
        toString() { return "Western"; }
    },
    ZEICHENTRICK: {
        toString() { return "Zeichentrick"; }
    }
});