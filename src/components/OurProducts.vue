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
                    <MainCarousel />
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import MainCarousel from './MainCarousel'

export default {
    name: 'OurProducts',
    
    components: {
        MainCarousel
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

    


}
</style>