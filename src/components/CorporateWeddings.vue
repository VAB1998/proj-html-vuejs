<template>
    <section id="corporate_weddings">
        <div class="container h-100">
            <div class="row gx-5 align-items-center h-100">
                <div class="col-12">
                    <div class="subtitle mb-3"> 
                        <h6>corporate and weddings</h6>
                    </div>
                    <div class="title">
                        <h2>Baking Special Moments</h2>
                    </div>
                </div>
                <div class="col-6">
                    <div class="image_wrapper">
                        <img src="../assets/images/corporate-bg.jpg" alt="Corporate">
                    </div>
                </div>
                <div class="col-6">
                    <div class="image_wrapper">
                        <img src="../assets/images/wedding-bg.jpg" alt="Wedding">
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'CorporateWeddings',
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#corporate_weddings{
    height: 1000px;

    .subtitle{
        h6{
            text-align: center;
            @include subtitle_style;
        }
    }

    .title{
        h2{
            text-align: center;
            @include title_style;
        }
    }

    .image_wrapper{
        height: 700px;
        img{
            //Image Settins
            object-fit: cover;
            //Spacing and Dimensions
            width: 100%;
            height: 100%;
        }
    }
}
</style>