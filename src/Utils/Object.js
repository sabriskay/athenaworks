export function isObject (obj) {
	return Object.prototype.toString.call(obj) === '[object Object]';
}

export function isNumeric (value) {
    return typeof value === 'number';
}

export function isString (value) {
    return typeof value === 'string'
}

export function hasValue (query) {
    if (isString(query)) {
        query = query.toLowerCase();
    }

    const _hasValue = (object) => {
        for (const key in object) {
            const element = object[key];

            if (Array.isArray(element) && _hasValue(element)) {
                return true;
            } else if (isObject(element) && _hasValue(element)) {
                return true;
            } else if (isNumeric(element) && element == query ) {
                return true;
            } else if (isString(element) && element.toLowerCase().indexOf(query) !== -1) {
                return true;
            }
        }

        return false;
    };

    return _hasValue;
};

export function hasAttributesWithValue (queries) {
    if (!Object.keys(queries).length) {
        return true;
    }

    for (const key in queries) {
        if (isString(queries[key])) {
            queries[key] = queries[key].toLowerCase();
        }
    }

    const _hasAttributeWithValue = (key, value) => {
        if (!queries[key]) {
            return false;
        }

        let attribute = queries[key].toString();
        if (value.toLowerCase().indexOf(attribute) !== -1) {
            return true;
        }

        return false;
    }

    const _hasAttributesWithValue = (object) => {
        for (const key in object) {
            const element = object[key];

            if (Array.isArray(element) && element.includes()) {
                return true;
            } else if (isObject(element) && _hasAttributesWithValue(element)) {
                return true;
            } else if (isNumeric(element) && _hasAttributeWithValue(key, element)) {
                return true;
            } else if (isString(element) && _hasAttributeWithValue(key, element)) {
                return true;
            }
        }

        return false;
    };

    return _hasAttributesWithValue;
};