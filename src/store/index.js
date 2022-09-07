
const store = new Vuex.Store({
    state: {
        isSearched: false,
    },
    mutations: {
        setSearched(state, bool) {
            state.isSearched = bool
        },
    },
    modules: {
        books: moduleBooks,
        pagination: modulePagination,
    }
})