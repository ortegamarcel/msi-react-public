export default class Filter {
    constructor(filter) {
        if (filter != null && filter.constructor !== String) {
            console.log("filter must be typeof String");
            return null;
        }
        let filterStr, filterRegex;
        this.filterStr = filter ? filter : "";
        this.filterRegex = new RegExp(this.filterStr, "i");
    }

    set(filter) {
        if (filter == null) {
            this.filterStr = "";
            this.filterRegex = new RegExp();
        } else if (filter.constructor === String) {
            this.filterStr = filter;
            try {
                this.filterRegex = new RegExp(filter, "i");
            } catch(error) { // filter couldn't be converted to RegExp
                console.log(error);
                this.filterRegex = new RegExp();
            }
            return true;
        } else {
            console.log("filter must be typeof String");
            return false;
        }
    }

    reset() {
        this.filterStr = "";
        this.filterRegex = new RegExp("");
    }

    // Check if the parameter matches the filter (as RegExp):
    // filterRegex.test(str)
    // param str - typeof String
    // return true if str matches filter, false if not or if str is not a string
    match(str) {
        if (str == null || str.constructor !== String) {
            return false;
        }
        return this.filterRegex.test(str);
    }

    toString() {
        return this.filterStr;
    }
}
