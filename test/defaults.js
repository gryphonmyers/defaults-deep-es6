var tap = require('tap')

var defaults = require('../src/defaults');

var obj = {a: 2};
tap.notEqual(defaults({
    a: 2
}, {
    a: 2
}), obj, "Expect objects to be treated as immutable.");

tap.same(defaults({
    a: 1,
    c: 3,
    d: undefined
}, {
    a: 2,
    b: 2,
    d: 4
}), {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}, "Expect undefined values to be overwritten by those in target ");

tap.same(defaults({
    a: null
}, {
    a: 2,
    b:2
}), {
    a: null,
    b: 2
}, "Expect null values to be preserved in source.");

tap.same(defaults({
    a: 1
}, {
    a: {
        b: 2
    }
}), {
    a: 1
}, "Expect object value in target for key defined in source to be ignored.");

tap.same(defaults({
    a: 1
}, {
    b: {
        c: 2
    }
}), {
    a: 1,
    b: {
        c: 2
    }
}, "Expect object to be copied over to undefined keys.");

tap.same(defaults({
    a: {
        b: 1
    }
}, {
    a: {
        b: 2
    }
}), {
    a: {
        b: 1
    }
}, "Expect object to be preserved in source.");

tap.same(defaults({
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
        b: 1
    }
}, "Expect undefined keys in nested object to be ignored.");

tap.same(defaults({
    a: [1,2]
}, {
    a: [2,3]
}), {
    a: [1,2]
}, "Expect array values in source to be preserved.");

tap.same(defaults({
    a: 1,
    b: 2
}, {
    c: 3
}, {
    d: 4
}), {
    a: 1,
    b: 2,
    c: 3,
    d: 4
}, "Expect multiple arguments to be merged.");
