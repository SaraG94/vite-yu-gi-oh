<script>
   
    import axios from'axios'
    import store from'../store'
    import Card from './Card.vue'

    export default{
        components:{
            Card
        },
        data(){
            return{
                store
            }
        },
        computed:{
            cards(){
                return this.store.cards
            }
        },
        methods:{
            createCards(){
                axios
                    .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                    .then((res)=>{
                        console.log(res.data.data);
                        this.store.cards = res.data.data
                    })
            }
        },
        created(){
            this.createCards()
            console.log('qui', this.store)
        }
    }
</script>

<template>
    <div class="container">
        <input class="search-bar" type="text" placeholder="Nome della carta">
    </div>

    <ul class="container album-cards">
        <card v-for="card in cards" :key="card.id" :card="card" class="card-el"></Card>
    </ul>
</template>

<style lang="scss" scoped>
 @use '../style/partials/variables' as *;

    .search-bar{
        margin-top: 25px;
        padding: 5px 10px;
        font-size: 15px;
        border-radius: 10px;
    }
    .album-cards{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap:20px;
        text-align: center;
        padding: 30px 0;

        .card-el{
            background-color: $bg-color;
            padding-bottom: 5px;
            box-shadow: 6px 6px 5px #492d2d;
        }
    }
</style>