<template>
    <section id="products_shop">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-3 text-center">
                    <div class="title">
                        <h2>Find a freshly baked product perfect for you</h2>
                    </div>
                    <p>Integer a nibh vitae ex porttitor rutrum et ut velit. Etiam ac felis at leo feugiat placerat. Sed ac nulla id orci tempor convallis sed.</p>
                    <div class="link_button">
                        <a href="https://bit.ly/383Vh7n">Shop All Products</a>
                    </div>
                </div>
                <div class="col-9">
                    <ShopCarousel />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ShopCarousel from './ShopCarousel'

export default {
    name: 'ProductsShop',
    components: {
        ShopCarousel
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#products_shop{
    //Spacing and Dimensions
    height: 680px;

    .title{
        h2{
            @include title_style;
        }
    }

    p{  
        //Style
        color: #676371;
        //Spacing and Dimensions
        margin: 20px 0;
    }

    .link_button{
        a{
            @include dark_link_button;
            
            &:hover{
                @include light_link_button;
            }
        }
    }
}

</style>