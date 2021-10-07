<template>
    <div class="shop_carousel">
        <!-- Previous Image -->
        <div class="previous_image">
            <i class="fas fa-angle-left"></i>
        </div>
        <!-- Image Slider -->
        <div class="image_slider">
            <CarouselCard v-for="(card, index) in CarouselCards" :key="index" 
            :title="card.title" :price="card.price" :url="card.url" :imageSource="card.imageSource"/>
        </div>
        <!-- Next Image -->
        <div class="next_image">
            <i class="fas fa-angle-right"></i>
        </div>
    </div>
</template>

<script>
import CarouselCard from './CarouselCard.vue'
//------Data------
import CarouselCards from '../data/CarouselCards.js'
export default {
    name: 'ShopCarousel',
    data : function(){
        return {
            CarouselCards
        }
    },

    components: {
        CarouselCard
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.shop_carousel{
    /* Spacing and Dimensions */
    width: 100%;
    //Positioning the Icons
    position: relative;

    .previous_image,
    .next_image{
        //Style
        color: #ffffff;
        background-color: #56328b96;
        padding: 24px 12px;
        cursor: pointer;
        //Positioning the Icons
        position: absolute;
        bottom: 50%;
        transform: translateY(50%);
        //Hover Effect Settings
        transition: .3s linear;

        &:hover{
            background-color: #55328b;
        }
    }

    .next_image{
        //Positioning the Icons
        right: 0;
    }

    .image_slider{
        //Flex Settings
        display: flex;
        justify-content: space-between;
    }
}
</style>