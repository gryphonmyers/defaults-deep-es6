var tap = require('tap')

var defaultsDeep = require('../deep');

tap.same(defaultsDeep({
    a: [1,2]
}, {
    a: [2,3]
}), {
    a: [1,2]
}, "Expect source array to be preserved.");

tap.same(defaultsDeep({
    a: {
        b: 1
    }
}, {
    a: {
        b: 2,
        c: 3
    }
}), {
    a: {
        b: 1,
        c: 3
    }
}, "Expect nested object values in source to be copied from target.");

tap.same(defaultsDeep({
    a: {
        b: [1,2]
    }
}, {
    a: {
        b: [2,3],
        c: 3
    }
}), {
    a: {
        b: [1,2],
        c: 3
    }
}, "Expected nested values to be merged, but not arrays.");

tap.same(defaultsDeep({
    a: {
        b: {
            f: 6
        }
    }
}, {
    a: {
        b: {
            c: {
                d: 4,
                e: 3
            },
            f: 5
        },
        f: 6
    }
}), {
    a: {
        b: {
            f: 6,
            c: {
                d: 4,
                e: 3
            }
        },
        f: 6
    }
}, "Expect deeply nested trees to be merged appropriately.");
