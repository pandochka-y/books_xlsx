

const TheHeader = {
    template: `
    <header class="header flex items-center py-4 px-6 border-solid border-b border-gray-200">
    <div class="header__logo-wrapper">
    <img class="h-10 w-10" src="public/img/Logo.png" alt="">
    </div>

</header>
    `,
    data() {
        return {
            // limit: 10,
            // query: '',
            // selectLimitOptions: [
            //     { value: 10, name: 10, id: 1},
            //     { value: 25, name: 25, id: 2},
            //     { value: 50, name: 50, id: 3},
            //     { value: 75, name: 75, id: 4},
            //     { value: 100, name: 100, id: 5},
            // ],
        }
    },
    methods: {

        // onInputQuery(e) {
        //     this.query = e.target.value
        // },
        //
        // changeLimit(e) {
        //     this.limit = Number(e.target.value)
        // },
        //
        // async onSubmit() {
        //     if (!this.query) return false;
        //     if (this.query === this.params?.query && this.limit === this.params?.limit) return false;
        //     const params = {
        //         query: this.query,
        //         limit: this.limit,
        //         page: 1,
        //     };
        //     this.setParams(params);
        //     this.getBooks(params);
        // },
        //
        // ...Vuex.mapActions({
        //     getBooks: 'getBooks',
        // }),
        // ...Vuex.mapMutations({
        //     setParams: 'setParams'
        // })
    },

    computed: {

        // ...Vuex.mapState({
        //     books: state => state.books.books,
        //     params: state => state.books.params,
        // }),

    }
}