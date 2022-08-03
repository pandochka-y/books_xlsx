
const BaseButton = {
    template: `
    <button  @click="onClick" class="text-gray-400 border-gray-300 rounded-lg border flex items-center px-3 py-2">
    {{ text }}</button>
    `,
    props: {
        text: {
            type: String,
            default: 'Button'
        },
    },
    methods: {
        onClick() {
            this.$emit('click')
        },
    }
}