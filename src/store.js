import { reactive } from "vue";

const store= reactive({
    cards:[],
    search:'',
    number: 20,
})

export default store