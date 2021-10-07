<template>
    <div class="carousel_card">
        <div class="image_wrapper">
            <img :src="imageSource" :alt="title">
        </div>
        <div class="card_body">
            <h4 class="card_title"> {{title}} </h4>
            <h5 class="card_price"> {{price}} </h5>
        </div>
    </div>
</template>

<script>

export default {
    name: 'CarouselCard',

    props : {
        title : String,
        price : String,
        url : String,
        imageSource : String
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

.carousel_card{
    //Spacing and Dimensions
    width: 220px;
    height: 350px;  
    padding: 10px;

    .image_wrapper{
        //Spacing and Dimensions
        width: 100%;
        height: 70%;

        img{
            //Spacing and Dimensions
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
    }

    .card_body{
        text-align: center;

        .card_title{
            @include title_style;
        }

        .card_price{
            color: $primary_color;
        }
    }
}
</style>