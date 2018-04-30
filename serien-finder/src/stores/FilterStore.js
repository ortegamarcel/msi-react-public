import { EventEmitter } from 'events';
import dispatcher from '../dispatcher/dispatcher';
import Filter from '../model/Filter';

class FilterStore extends EventEmitter {
    constructor() {
        super();
        this.titleFilter = new Filter();
        this.descriptionFilter = new Filter();
    }

    resetFilter() {
        this.titleFilter.reset();
        this.descriptionFilter.reset();
    }

    handleActions(action) {
        switch (action.type) {
            case "SET_TITLE_FILTER":
                this.titleFilter.set(action.title);
                this.emit("changed");
                break;

            case "SET_DESCRIPTION_FILTER":
                this.descriptionFilter.set(action.description);
                this.emit("changed");
                break;

            case "RESET_ALL_FILTER":
                this.resetFilter();
                this.emit("changed");
                break;

            default:
                console.log("FilterStore received event: " + action.type);
                break;
        }
    }
}

const filterStore = new FilterStore;
dispatcher.register(filterStore.handleActions.bind(filterStore));
window.dispatcher = dispatcher;
export default filterStore;
