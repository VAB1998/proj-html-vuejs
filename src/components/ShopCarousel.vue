<template>
    <div class="shop_carousel">
        <!-- Previous Image -->
        <div class="previous_image">
            <i class="fas fa-angle-left"></i>
        </div>
        <!-- Image Slider -->
        <div class="image_slider">
            
        </div>
        <!-- Next Image -->
        <div class="next_image">
            <i class="fas fa-angle-right"></i>
        </div>
    </div>
</template>

<script>

export default {
    name: 'ShopCarousel',
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
        img:first-child{
            margin-right: 20px;
        }
        img{
            width: calc(100% / 2 - 10px);
        }
    }
}
</style>