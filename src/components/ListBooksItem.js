
const ListBooksItem = {
    template: `
    <li :class="['mb-6', 'flex', isLast? 'mb-8': '',]">
    
       <img  
        style="height: 217px; min-width: 128px; width: 128px; object-fit: cover; object-position: center;" 
        :src="url"
        @error="onError"
        alt="">
            <div class="p-5 w-full flex flex-col">
                <div class="text-2xl font-medium"><span style="color: #FF7300">{{book?.title || 'Видимо, тайна'}}</span></div>
                <div class="mb-auto">Кол-во изданий {{book?.edition_count ? book?.edition_count : 'Видимо, тайна'}}</div>
                <div class="w-full flex justify-between flex-wrap">
                    <div class="text-xl">Автор <span style="color: #FF7300">{{ book?.author_name ? book?.author_name[0] : 'Видимо, тайна'}}</span></div>
                    <div class="text-lg">Год первой публикации {{ book?.first_publish_year ? book?.first_publish_year : 'Видимо, тайна' }}</div>
                </div>
           </div>
    </li>
    `,
    props: {
        book: {
            type: Object,
            default: () => {}
        },
        isLast: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
            url: ''
        }
    },
    methods: {
        getUrlImage() {
            if (this.book?.isbn?.length) {
                this.url = `https://covers.openlibrary.org/b/isbn/${this.book?.isbn[0]}-M.jpg?default=false`
            }
        },
        onError(e) {
            e.error = null
            this.url = '/public/img/emptyPhoto.png'
        }
    },
    mounted() {
        this.getUrlImage()
    }
}