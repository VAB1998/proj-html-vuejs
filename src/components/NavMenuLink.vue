<template>
    
    <li :class="{active : currentPage}">
        <a :href="anchorTag"> {{text}} </a>
    </li>
    
</template>

<script>


export default {
    name: 'Navbar',
    props : {
        text : String,
        anchorTag : String,
        currentPage : Boolean
    },
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

li{
    //Spacing and Dimensions
    height: 100%;
    a{
        @include link_style;
        line-height: 40px;
    }

    &.active{
        border-bottom: 2px solid $primary_color;
    }
}
</style>
