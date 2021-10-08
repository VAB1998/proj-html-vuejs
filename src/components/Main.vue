<template>
    <main>
        <Jumbotron />
        <OurProducts />
        <CorporateWeddings />
        <ProductsShop />
        <TellUsProcess />
    </main>
</template>

<script>
import Jumbotron from './Jumbotron'
import OurProducts from './OurProducts'
import CorporateWeddings from './CorporateWeddings'
import ProductsShop from './ProductsShop'
import TellUsProcess from './TellUsProcess'

export default {
    name: 'Main',
    components: {
        Jumbotron,
        OurProducts,
        CorporateWeddings,
        ProductsShop,
        TellUsProcess
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

</style>