module.exports = function() {
    return Array.from(arguments).slice(1).reduce((finalArr, arr) => {
        return finalArr.concat(arr.filter(item => finalArr.indexOf(item) < 0));
    }, arguments[0]);
};