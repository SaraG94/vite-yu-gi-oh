<script>
    import CardsVue from './Cards.vue';

    export default{
        components:{
            CardsVue
        }
    }
</script>

<template>
    <main>
        <CardsVue></CardsVue>
    </main>
</template>

<style lang="scss" scoped>

    main{
        background-image: url('https://www.teahub.io/photos/full/229-2290417_background-yu-gi-oh.jpg');
        background-repeat: no-repeat;
        background-size: cover;
        background-position: top,center;
    }

</style>