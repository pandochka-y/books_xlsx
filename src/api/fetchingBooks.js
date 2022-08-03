
class FetchingBooks {
    static async getBooks(url, query, limit= 10, page = 1, fields) {
        console.log(page, 'page')
        // instance from helpers
        const response = await instance.get(url, {
            params: {
                q: query,
                limit: limit,
                page: page,
                fields: fields
            }
        })
        console.log(response)
        return response.data
    }
}