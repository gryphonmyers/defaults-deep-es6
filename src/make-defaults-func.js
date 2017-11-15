module.exports = function(deep) {
    return function defaults() {
        return Array.from(arguments).slice(1).reduce((sourceObj, obj) => {
            Object.entries(obj).forEach((entry) => {
                if (typeof sourceObj[entry[0]] === 'undefined') {
                    sourceObj[entry[0]] = entry[1];
                } else if (deep && [entry[1], sourceObj[entry[0]]].every(val => val && typeof val === 'object' && !Array.isArray(val))) {
                    sourceObj[entry[0]] = defaults(sourceObj[entry[0]], entry[1]);
                }
            });
            return sourceObj;
        }, Object.assign({}, arguments[0]));
    }
};
