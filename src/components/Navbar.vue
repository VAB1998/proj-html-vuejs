<template>
    
        <nav id="cs_navbar">
            
                <div class="navbar-logo h-75">
                    <a href="#">
                        <img class="h-100" src="../assets/images/avada-bakery-logo-retina-200x97.png" alt="">
                    </a>
                </div>
                
                <ul class="nav_main_menu">
                    <NavMenuLink v-for="(link, index) in mainMenuLinks"  :key="index" 
                    :currentPage="link.current" :text="link.text" :anchorTag="link.url"/>
                </ul>

                <ul class="nav_side_menu">
                    <NavMenuLink v-for="(link, index) in sideMenuLinks"  :key="index" 
                    :text="link.text" :anchorTag="link.url"/>
                    <li>
                        <a href="#cart"> 
                            <i class="fas fa-shopping-cart"></i>
                        </a>
                    </li>
                </ul>
        </nav>

</template>

<script>
import NavMenuLink from './NavMenuLink.vue' 
//------Data------
import mainMenuLinks from '../data/mainMenuLinks.js'

export default {

    name: 'Navbar',
    components: {
        NavMenuLink
    },

    data : function(){
        return {
            mainMenuLinks,

            sideMenuLinks : [
                {
                    text: 'account',
                    url: '#account',
                },
            ]
        } 
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#cs_navbar{
    //Style
    text-transform: uppercase;
    font-size: .8rem;
    //Spacing and Dimensions
    height: 100px;
    padding: 0 20px;
    //Flex Settings
    display: flex;
    justify-content: space-between;
    align-items: center;

    //Other Settings
    position: absolute;
    width: 100%;

    ul{
    list-style-type: none;
    padding-left: 0;
    margin: 0;
    //Flex Settings
    display: flex;
    align-items: center;

        a{
            @include link_style;
        }
    }
}
</style>