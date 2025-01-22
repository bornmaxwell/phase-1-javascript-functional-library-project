// myEach: Iterates over a collection and applies a callback to each element.
function myEach(collection, callback) {
    for (let key in collection) {
        callback(collection[key]);
    }
    return collection;
}

// myMap: Creates a new array with the results of applying the callback to each element.
function myMap(collection, callback) {
    let result = [];
    for (let key in collection) {
        result.push(callback(collection[key]));
    }
    return result;
}

// myReduce: Reduces collection to a single value using a callback function.
function myReduce(collection, callback, acc) {
    let keys = Object.keys(collection);
    if (acc === undefined) {
        acc = collection[keys[0]];
        keys = keys.slice(1);
    }
    for (let key of keys) {
        acc = callback(acc, collection[key]);
    }
    return acc;
}

// myFind: Returns the first element that satisfies the callback function.
function myFind(collection, predicate) {
    for (let key in collection) {
        if (predicate(collection[key])) {
            return collection[key];
        }
    }
    return undefined;
}

// myFilter: Returns a new array with elements that satisfy the callback function.
function myFilter(collection, predicate) {
    let result = [];
    for (let key in collection) {
        if (predicate(collection[key])) {
            result.push(collection[key]);
        }
    }
    return result;
}

// mySize: Returns the number of elements in the collection.
function mySize(collection) {
    return Object.keys(collection).length;
}

// myFirst: Returns the first element (or first n elements) of an array.
function myFirst(array, n = 1) {
    return n === 1 ? array[0] : array.slice(0, n);
}

// myLast: Returns the last element (or last n elements) of an array.
function myLast(array, n = 1) {
    return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// myKeys: Returns an array of object keys.
function myKeys(obj) {
    return Object.keys(obj);
}

// myValues: Returns an array of object values.
function myValues(obj) {
    return Object.values(obj);
}

// Export all functions to be used in tests
module.exports = {
    myEach,
    myMap,
    myReduce,
    myFind,
    myFilter,
    mySize,
    myFirst,
    myLast,
    myKeys,
    myValues
};