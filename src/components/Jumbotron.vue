<template>
    <section id="jumbotron">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                    <div class="col-4">
                    <h6>fresh & tasty bakery every dy</h6>
                    <h2>The Perfect Fresh Bread</h2>
                    <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Aliquam erat volutpat. Nullam quis sagittis nibh ac nulla id orci tempor.</p>
                    <a href="https://avada.theme-fusion.com/bakery/shop/">Explore our products</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'Jumbotron',
    components: {

    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#jumbotron{
    //Style
    background-image: url('../assets/images/hero-header-bakery.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    //Spacing and Dimensions
    height: 830px;


    h6{
        @include subtitle_style;
    }

    h2{
        @include title_style;
        font-size: 3.3rem;
    }

    p{
        color: #676371;
        margin: 30px 0;
    }

    a{  
        @include light_link_button;

        &:hover{
            @include dark_link_button;
        }
    }
}
</style>