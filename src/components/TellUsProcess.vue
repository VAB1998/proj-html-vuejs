<template>
    <section id="tell_us_process" class="container ">
        <div class="row justify-content-end h-100">
            <div class="col-6">
                <div class="title">
                    <h2>Tell us what you have in mind</h2>
                </div>
            </div>
            <div class="col-6">
                <div class="process_number text-end">
                    <span>01</span>
                </div>
            </div>
            <div class="col-4 align-self-end">
                <div class="subtitle">
                    <h6>manual ingredients selection</h6>
                </div>
                <p>Cras consequat lectus vestibulum tortor pulvinar, quis euismod nisl varius. Ut eu laoreet ex. Aliquam erat volutpat. Nullam quis sagittis nibh. Morbi consectetur ultricies ante ac congue. Donec lorem erat, finibus in velit placerat, rutrum augue.</p>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    name: 'TellUsProcess',

}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';

#tell_us_process{
    //Style
    color: #ffffff;
    //Spacing and Dimensions
    height: 760px;
    padding: 50px;
    //Background Settings
    background: linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4) ), url('../assets/images/bakery-process-1.jpg');
    background-position: center left; 
    background-repeat: no-repeat;
    background-size: cover;

    .title{
        h2{
            font-size: 3rem;
            font-weight: bold;
        }
    }
    .process_number{
        font-size: 5rem;
        font-weight: lighter;
    }

    .subtitle{
        h6{
            text-transform: uppercase;
            font-size: .8rem;
        }
    }

    p{
        font-size: 1.2rem;
    }

}
</style>