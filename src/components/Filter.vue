<script>
    import store from'../store'

    export default{
        data(){
            return{
                
                numbCardOption: [
                    20,
                    50,
                    100, 
                    200
                ],
                store
            }
        },
    }
</script>

<template>
    <div class="container">
        <div>
            <input class="search-bar"
            type="text" placeholder="Nome della carta"
            v-model="store.search" 
            @change="$emit('onSearch')">
        </div>
        
        <div>
            <select class="number-cards" v-model="store.number"  @change="$emit('onSearch')">
                <option value="">-scegli il numero di carte-</option>
                <option v-for="number in numbCardOption" :key="number" :value="number">
                    {{number}}
                </option>
            </select>
        </div>
    </div>
</template>

<style lang="scss" scoped>

    .container{
        display: flex;
        gap:10px;
    }

    .search-bar,
    .number-cards{
        margin-top: 25px;
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 10px;
    }

    select.number-cards{
        font-size: 14px;
    }
</style>