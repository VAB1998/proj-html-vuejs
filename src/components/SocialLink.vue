<template>
    <a   :href="url">
        <i :class="icon"></i>
    </a>
</template>

<script>

export default {
    name: 'SocialLink',

    props : {
        url : String,
        icon: String
    }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

a{
    @include link_style;
    font-size: 1.4rem;
}
</style>