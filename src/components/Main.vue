<template>
    <main>
        <Jumbotron />
        <OurProducts />
    </main>
</template>

<script>
import Jumbotron from './Jumbotron'
import OurProducts from './OurProducts'

export default {
    name: 'Main',
    components: {
        Jumbotron,
        OurProducts,
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
main{
    background-color: cadetblue;
}
</style>