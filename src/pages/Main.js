


const Main = {
    template: `
    
<div :class="['container', 'mx-auto', 'max-w-4xl', 'block-animation', isSearched? 'searched': '']">

    <div class="main-title text-center pb-14">
        <div class="title pb-20 text-7xl">Just Search<span style="color: #FF7300">.IT</span></div>
        <div class="text">Searching for book information on <a style="color: #FF7300" href="https://openlibrary.org/">openlibrary.org</a>
        </div>
    </div>
    <search-bar/>
    
    <div class="w-full flex mb-8 border-t pt-8  mx-auto w-full justify-between justify-end">
        <base-select
                :title="'Select sort'"
                id="hideArrow"
                :options="selectSort"
                @change="onChangeSort"
                class="mr-10 text-center p-2 border rounded-lg border-gray-300 bg-transparent"
                style=""
        />
        <base-button
                style=" color: #FF7300"
                :text="'Download xlsx'"
                @click="downloadXlsx"
                v-if="this.sortedBooks.length"
        />
    </div>
    
    <div>
        <list-books
                :books="sortedBooks"
                v-if="!isLoading"
                :isSearched="isSearched"
        />
        <spinner-loader
                v-if="isLoading"
        />
    </div>

    <base-navigation
            @changePage="changePage"
            class="mb-44"
            v-if="this.sortedBooks.length && !isLoading"
    />

</div>
</div>
    `,
    data() {
        return {
            objectSortBy: null,
            selectSort: [
                {value: 'sort', name: 'A-Z', id: 0, sortBy: 'title'},
                {value: 'sort_desc', name: 'Z-A', id: 1, sortBy: 'title'},
            ],
            currentPage: 1,
            totalPage: 10,
        }
    },
    methods: {
        downloadXlsx() {
            const formatList = processToFormatXlsx(this.sortedBooks)
            exportBookListXlsx(formatList, this.params)
        },

        changePage(page) {
            if (!this.params) return false;
            this.changeParams(page);
            this.setCurrentPage(page)
            this.getBooks(this.params);
        },

        changeParams(page) {
            this.setParams({
                ...this.params,
                page: page
            })
        },

        onChangeSort(e) {
            const idSelected = Number(e.target.selectedOptions[0].getAttribute('id'))
            for (let option of this.selectSort) {
                if (option.id === idSelected) {
                    this.objectSortBy = option
                    break;
                }
            }
        },

        ...Vuex.mapActions({
            getBooks: 'getBooks',
        }),

        ...Vuex.mapMutations({
            setParams: 'setParams',
            setCurrentPage: 'setCurrentPage',
        })
    },
    computed: {

        sortedBooks() {
            if (!this.books?.docs.length) return [];
            if (!this.objectSortBy) {
                this.objectSortBy = this.selectSort[0];
            }
            return [...this.books?.docs].sort((book1, book2) =>
                sortingMethods[this.objectSortBy.value](this.objectSortBy.sortBy, book1, book2)
            )
        },

        ...Vuex.mapState({
            books: state => state.books.books,
            isLoading: state => state.books.isLoading,
            params: state => state.books.params,
            isSearched: state => state.isSearched,
        }),
    },
}