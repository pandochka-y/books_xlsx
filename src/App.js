const App = {
    template: `
        <div :class="[isLoading? 'pr-17px': '', !isSearched? 'pr-17px': '', ]">
        <the-header/>
        <router-view></router-view>
    </div>
    `,
    computed: {
        ...Vuex.mapState({
            isLoading: state => state.books.isLoading,
            isSearched: state => state.isSearched,
        }),
    }
}