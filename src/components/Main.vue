<script>
import axios from'axios'

  export default{

    data(){
        return{
            cards:[]
        }
    },
    methods:{
        createCards(){
            axios
                .get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
                .then((res)=>{
                    console.log(res.data.data);
                    this.cards = res.data.data
                })
        }
    },
    created(){
        this.createCards()
    }
  }
</script>

<template>
   
    <ul class="container album-cards">
        <li v-for="card in cards" :key="card.id">
            <p>{{card.name}}</p>
            <p>{{card.archetype}}</p>  
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    .album-cards{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap:20px;
        text-align: center;
        padding: 30px 0;


        li{
            /**debug**/
            border: 1px solid black;
            padding: 20px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

</style>