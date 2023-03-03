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
   
    <ul>
        <li v-for="card in cards" :key="card.id">
            <p>{{card.name}}</p>
            <p>{{card.archetype}}</p>  
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>