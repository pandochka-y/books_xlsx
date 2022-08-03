const SearchBar = {
    template: `
    <div class="border-solid border border-gray-400 rounded-lg mx-auto  mb-8 flex content-center">
    
    <search-bar-input
        @input="onInputQuery"
        class="w-3/4"
        @onEnter="onSubmit"
    />
    
    <hr class="mx-4">
    
    <div class="content-center flex p-4">
    
    <base-select
        :title="'Limit'"
        @change="changeLimit"
        :options="selectLimitOptions"
        class="text-center bg-transparent p-2 mr-5"
    />
    
    <search-bar-button
        @click="onSubmit"
        :text="'Go!'"
        style="background-color: #FF7300"
    />
    </div>
    </div>
    `,
    data() {
        return {
            objectSortBy: null,
            limit: 10,
            query: '',
            selectLimitOptions: [
                { value: 10, name: 10, id: 1},
                { value: 25, name: 25, id: 2},
                { value: 50, name: 50, id: 3},
                { value: 75, name: 75, id: 4},
                { value: 100, name: 100, id: 5},
            ],
        }
    },
    methods: {

        onInputQuery(e) {
            this.query = e.target.value
        },

        changeLimit(e) {
            this.limit = Number(e.target.value)
        },

        async onSubmit() {
            if (!this.query) return false;
            if (this.query === this.params?.query && this.limit === this.params?.limit) return false;
            if (!this.isSearched) {
                this.setSearched(true)
            }
            const params = {
                query: this.query,
                limit: this.limit,
                page: 1,
            };
            this.setParams(params);
            this.getBooks(params);
        },

        ...Vuex.mapActions({
            getBooks: 'getBooks',
        }),
        ...Vuex.mapMutations({
            setParams: 'setParams',
            setSearched: 'setSearched',
        })
    },
    computed: {

        ...Vuex.mapState({
            params: state => state.books.params,
            isSearched: state => state.isSearched,
        }),
    }
}