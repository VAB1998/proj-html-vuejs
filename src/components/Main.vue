<template>
    <main>
        <Jumbotron />
        <OurProducts />
        <CorporateWeddings />
    </main>
</template>

<script>
import Jumbotron from './Jumbotron'
import OurProducts from './OurProducts'
import CorporateWeddings from './CorporateWeddings'

export default {
    name: 'Main',
    components: {
        Jumbotron,
        OurProducts,
        CorporateWeddings,
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
main{
    // background-color: cadetblue;
}
</style>