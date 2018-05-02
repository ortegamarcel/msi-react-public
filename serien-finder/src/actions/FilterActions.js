import dispatcher from '../dispatcher/dispatcher';

export function setTitleFilter(title) {
    dispatcher.dispatch({
        type: "SET_TITLE_FILTER",
        title
    });
}

export function setDescriptionFilter(description) {
    dispatcher.dispatch({
        type: "SET_DESCRIPTION_FILTER",
        description
    });
}

export function resetAllFilter() {
    dispatcher.dispatch({
        type: "RESET_ALL_FILTER"
    });
}
