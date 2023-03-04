<script>
    import store from'../store'

    export default{
        data(){
            return{
                store
            }
        },
        computed:{
            cards(){
                return this.store.cards
            }
        }
    }
</script>

<template>
    <footer class="list-page">
        <div class="container">
            <p class="elements">
                <span class="numb-el">{{ cards.length }}</span>
                cards of..
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;

    footer.list-page{
        background-color: $bg-color;
        padding: 15px;
        font-size: 18px;
    }

    .numb-el{
        font-weight: bold;
        text-decoration: underline;
    }
</style>