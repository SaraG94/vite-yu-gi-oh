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
  <li class="card">
    <img :src="card.card_images[0].image_url" alt="">

    <div class="card-descrition">
        <h3 class="name">{{card.name}}</h3>
        <p class="archetype">{{card.archetype}}</p>  
    </div>
  </li>
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
      font-weight: 400;
    }

    .archetype{
      font-style: italic;
      font-weight: 300;
    }
  }
</style>