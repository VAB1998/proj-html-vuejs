<template>
    <footer>
        <div class="container-fluid">
            <div class="row gy-5">
                <div class="col-6">
                    <div class="row">
                        <div class="col-12">
                            <img class="h-75" src="../assets/images/avada-bakery-logo-retina-200x97.png" alt="Avada Bakery Logo">
                        </div>
                        <div class="col-12">
                            <ul class="footer_menu">
                                <NavMenuLink v-for="(link, index) in footerMenuLinks"  :key="index" 
                                :text="link.text" :anchorTag="link.url"/>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="footer_subscribe text-center">
                        <h3>Subscribe to our Newsletter</h3>
                    <input type="text" placeholder="Enter email address*">
                    <button>Subscribe</button>
                    </div>
                </div>
                <div class="col-8">
                    <div class="copyright">
                        <p>
                            <!-- <i class="far fa-copyright"></i> -->
                            © Copyright 2019 | Avada Theme by 
                            <a href="http://theme-fusion.com">ThemeFusion</a>
                            | All Rights Reserved | Powered by 
                            <a href="http://wordpress.org">WordPress</a>
                        </p>
                    </div>
                </div>
                <div class="col-4">
                    <div class="socials">
                        <SocialLink v-for="(link, index) in SocialLinks" :key="index"
                        :url="link.url" :icon="link.icon" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import NavMenuLink from './NavMenuLink.vue' 
import SocialLink from './SocialLink.vue' 
//------Data------
import SocialLinks from '../data/socialLinks.js'
import footerMenuLinks from '../data/footerMenuLinks.js'
export default {
    name: 'Footer',
    components: {
        NavMenuLink,
        SocialLink
    },

    data : function(){
        return {
            SocialLinks,
            footerMenuLinks 
        }
        
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

footer{
    //Spacing and Dimensions
    padding: 60px;

    .footer_menu{
        //Style
        list-style-type: none;
        padding-left: 0;
        //Flex Settings
        display: flex;
        align-items: center;
    }

    .footer_subscribe{
        h3{
            //Style
            color: $primary_color;
            font-weight: bold;
            //Spacing and Dimensions
            margin-bottom: 36px;
        }

        input{
            //Style
            border-radius: 4px;
            color: #44405a99;
            border: 1px solid $light_gray_color;
            //Spacing and Dimensions
            height: 47px;
            margin-right: 6px;
            


            &:hover{
                //Style
                border: 1px solid $primary_color;
            }
        }

        button{
            //Style
            background-color: $primary_color;
            color: #ffffff;
            border: none;
            border-radius: 6px;
            //Spacing and Dimensions
            height: 47px;
            width: 160px;
        }
    }

    .copyright{
        font-size: .8rem;
        color: #44405a99;
        a{
            @include link_style;
        }
    }

    .socials{
        //Flex Settings
        display: flex;
        justify-content: space-evenly;
    }
}
</style>