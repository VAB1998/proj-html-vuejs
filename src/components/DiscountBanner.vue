<template>
    <section id="discount_banner">
        <div class="container_fluid h-100">
            <div class="row h-100">
                <div class="col-12 text-center">
                    <p>Free International Shipping - 10% OFF SITE</p> 
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'DiscountBanner',
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#discount_banner{
    //Style
    background-color: $light_gray_color;
    color: $primary_color;
    //-spacing and Dimensions
    height: 48px;
    p{
        line-height: 48px;
    }
}
</style>