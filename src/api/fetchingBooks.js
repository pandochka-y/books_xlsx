
class FetchingBooks {
    static async getBooks(url, query, limit= 10, page = 1, fields) {
        // instance from helpers
        const response = await instance.get(url, {
            params: {
                q: query,
                limit: limit,
                page: page,
                fields: fields
            }
        })
        return response.data
    }
}