<script>
  export default{
    props:{
      card:{
        type:Object,
        required:true
      }
    }
  }
</script>

<template>
  <div class="card">
    <img :src="card.card_images[0].image_url" alt="">

    <div class="card-descrition">
        <h3 class="name">{{card.name}}</h3>
        <p class="archetype">{{card.archetype}}</p>  
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .card{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .card-descrition{
    display: contents;

    h3.name{
      color: white;
      text-transform: uppercase;
      font-size: 17px;
    }

    .archetype{
      font-style: italic;
    }
  }
</style>