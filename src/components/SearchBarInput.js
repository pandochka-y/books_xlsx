
const SearchBarInput = {
    template: `
    <label :class="['input']">
    <input @change="onChange" @keyup.enter="onEnter" placeholder="Search..." class=" bg-transparent border-opacity-0 rounded-lg w-full p-3 h-full">
    </label>
    `,
    methods: {
        onChange(e) {
            this.$emit('input', e)
        },
        onEnter(e) {
            this.$emit('onEnter', e)
        },
    }
}