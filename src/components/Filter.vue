<script>
    import store from'../store'

    export default{
        data(){
            return{
                store
            }
        },
    }
</script>

<template>
    <div class="container">
        <input class="search-bar"
        type="text" placeholder="Nome della carta"
        v-model="store.search" 
        @change="$emit('onSearch')">
    </div>
</template>

<style lang="scss" scoped>

    .search-bar{
        margin-top: 25px;
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 10px;
    }
</style>