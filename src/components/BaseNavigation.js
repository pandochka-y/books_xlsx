
const BaseNavigation = {
    template: `
    <div class="flex items-center flex-col">
        <div class="mb-3"><span style="" class="text-3xl">{{ currentPage }}</span> / {{ totalPages }}</div>
        <div class="flex ">
            <base-button
                :text="'Prev'"
                @click="prevPage"
                class="text-gray-400 mr-4 button-hover border-gray-300 rounded-lg border flex items-center px-3 py-2"
            />
            <base-button
                :text="'Next'"
                @click="nextPage"
                class="text-gray-400 button-hover border-gray-300 rounded-lg border flex items-center px-3 py-2"
            />
        </div>
</div>
    `,
    props: {
        currentPage: {
            type: Number,
            default: 1,
        },
        totalPages: {
            type: Number,
            default: 1,
        }
    },
    methods: {
        prevPage() {
            let page = this.currentPage - 1;
            if (page === 0) return false;
            this.$emit('changePage', page);
        },
        nextPage() {
            let page = this.currentPage + 1;
            if (page > this.totalPages) return false;
            this.$emit('changePage', page);
        },


    },

}