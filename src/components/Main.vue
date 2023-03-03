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
                    console.log(res)
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
        <li>
            carta
        </li>
    </ul>
</template>

<style lang="scss" scoped>

</style>