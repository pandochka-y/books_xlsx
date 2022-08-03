const moduleBooks = {
    state: {
        books: null,
        params: null,
        isLoading: false,
        error: '',
    },
    mutations: {
        setBooks(state, data) {
            state.books = data
        },
        setLoading(state, bool) {
            state.isLoading = bool
        },
        setParams(state, params) {
            state.params = {...params}
        }
    },
    actions: {
        async getBooks({state, commit}, params) {
            commit('setLoading', true)
            const fields = `key,isbn,author_name,title,first_publish_year, edition_count`
            console.log(params)
            try {
                const response = await FetchingBooks.getBooks('/search.json', params?.query, params?.limit, params?.page, fields)
                commit('setBooks', response)
            } catch (e) {
                console.log(e)
            } finally {
                commit('setLoading', false)
            }
        },
    }
}