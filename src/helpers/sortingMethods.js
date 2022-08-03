
const sortingMethods = {
    sort: (key, a, b) =>
        a[key].toString().toLowerCase() > b[key].toString().toLowerCase() ? 1: -1,
    sort_desc: (key, a, b) =>
        a[key].toString().toLowerCase() < b[key].toString().toLowerCase() ? 1: -1,
    test: (test) => console.log('test', test)


}