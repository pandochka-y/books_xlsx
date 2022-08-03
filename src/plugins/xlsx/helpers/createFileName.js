const createFileName = (query, type = 'xlsx') => {
    return query.split(' ').join('_') + `.${type}`
}