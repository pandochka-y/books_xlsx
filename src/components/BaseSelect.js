
const BaseSelect = {
    template: `
    <select  @change="onChange">
    <option disabled value="">{{ title }}</option>
    <option 
        v-for="option of options" 
        :value="option.value"
        :id="option.id" 
        :key="option.id"
    >{{ option.name }}</option>
    
</select>
    `,
    props: {
        title: {
            type: String,
            default: "Select from the list"
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        onChange(e) {
            this.$emit('change', e)
        }
    }
}