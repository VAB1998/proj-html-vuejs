<template>
    <main>
        <Jumbotron />
        <OurProducts />
        <CorporateWeddings />
        <ProductsShop />
    </main>
</template>

<script>
import Jumbotron from './Jumbotron'
import OurProducts from './OurProducts'
import CorporateWeddings from './CorporateWeddings'
import ProductsShop from './ProductsShop'

export default {
    name: 'Main',
    components: {
        Jumbotron,
        OurProducts,
        CorporateWeddings,
        ProductsShop,
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

</style>