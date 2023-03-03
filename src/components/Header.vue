<script>
  export default{
    data(){
      return{
        title:'Yu-Gi-Oh!'
      }
    }
  }
</script>

<template>

  <header>
    <div class="container header__title">
      <h1>{{ title }}</h1>
    </div>
  </header>

</template>

<style lang="scss" scoped>
  @use '../style/partials/variables' as *;

  .header__title{
    text-align: center;
    font-size: 24px;
    padding: 15px;
    background-color: $bg-color;
    color: $text-color;
  }

</style>
