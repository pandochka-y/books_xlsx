const ListBooks = {
    template: `
    <ul class="list mt-2">
        <list-books-item
            v-for="book of books"
            :book="book"
            :key="book.id"
            :isLast="isLast(book)"
        />
        <div class="text-lg text-center"
        v-if="!books.length && isSearched">К сожалению, ничего не нашлось:(</div>
        <div class="text-lg text-center"
        v-if="!books.length && !isSearched">Пора начать поиск...</div>
    </ul>
    `,

    props: {
        books: {
            type: Array,
            default: () => []
        },
        isSearched: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        isLast(book) {
            const lastIndex = this.books.length - 1
            return  this.books[lastIndex] === book
        }
    },
    computed: {

    }

}