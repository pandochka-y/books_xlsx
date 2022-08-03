
const modulePagination = {
    state: {
        totalPage: 1,
        currentPage: 1,
    },
    mutations: {
        setTotalPage(state, count) {
            state.totalPage = count
        },
        setCurrentPage(state, count) {
            state.currentPage = count
        },
    },
}