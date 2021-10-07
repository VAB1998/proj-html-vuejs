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
            margin-right: 15px;
            a{
                @include link_style;
            }
        }
    
</style>
