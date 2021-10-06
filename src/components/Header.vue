<template>
    <header>
        <DiscountBanner />
        <Navbar />
    </header>
</template>

<script>
import DiscountBanner from './DiscountBanner'
import Navbar from './Navbar'

export default {
    name: 'Header',
    components: {
        DiscountBanner,
        Navbar
    }
}
</script>

<style lang="scss" scoped>

</style>