<template>
    <section id="our_products">
        <div class="container h-100">
            <div class="row align-items-center h-100">
                <div class="col-4">
                    <div class="subtitle mb-3"> 
                        <h6>our products</h6>
                    </div>
                    <div class="title mb-5">
                        <h2>All our delectable pastries are backed fresh in our Kitchen very morning, and are made with all-natural, all organic ingredients.</h2>
                    </div>
                    <div class="link_button">
                        <a href="https://bit.ly/383Vh7n">Buy Avada Today!</a>
                    </div>
                </div>
                <div class="col-8">
                    <div class="main_carousel">
                        <!-- Previous Image -->
                        <div class="previous_image">
                            <i class="fas fa-angle-left"></i>
                        </div>
                        <!-- Image Slider -->
                        <div class="image_slider">
                            <img src="../assets/images/choco-chip-cookies-700x893.jpg" alt="Choco cookies">
                            <img src="../assets/images/strawberry-jam-cookies-700x893.jpg" alt="">
                        </div>
                        <!-- Next Image -->
                        <div class="next_image">
                            <i class="fas fa-angle-right"></i>
                        </div>
                    
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'OurProducts',
    components: {

    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#our_products{
    height: 680px;

    .subtitle{
        h6{
            @include subtitle_style;
        }
    }

    .title{
        h2{
            @include title_style;
        }
    }

    .link_button{
        a{
            @include dark_link_button;
            
            &:hover{
                @include light_link_button;
            }
        }
    }

    .main_carousel{
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
            //Positioning the Icons
            position: absolute;
            bottom: 50%;
            transform: translateY(50%)
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


}
</style>