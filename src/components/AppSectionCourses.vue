<template>
    <section class="container">
        <div class="container-sm">
            <h3>JOIN MAX COACH AT BEST</h3>
            <h1>Latest Online <span>Courses</span></h1>
            <div class="row_castom">
                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/course-02-480x298.jpg" alt="">
                        <div class="card_main">
                            <div>$40.00</div>
                            <div>Laerning to Write as a <br>Professional Author</div>
                            <span>20 Lessons</span>
                            <span>50 Students</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/stock-full-hd-03-480x298.jpg" alt="">
                        <div class="card_main">
                            <div>$0.00</div>
                            <div>Customer-centric Info-Tech <br>Strategies</div>
                            <span>24 Lessons</span>
                            <span>769 Students</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/stock-full-hd-04-480x298.jpg" alt="">
                        <div class="card_main">
                            <div>$19.00</div>
                            <div>Open Programming Courses for <br>Everyone: Python</div>
                            <span>17 Lessons</span>
                            <span>62 Students</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div><font-awesome-icon class="icon_dot" v-for="n in 5" :icon="['fas', 'circle']" /></div>
                <div class="bottom_text">
                    Control your personal preference settings to get notified about <br> appropriate courses.
                    <a href="#">Viev all courses <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
                </div>
            </div>

        </div>
        <img class="wave" src="../assets/img/svg-1.svg" alt="">
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    background-image: linear-gradient(to bottom, #FFFFFF, #F1F1F1);
    margin-bottom: 200px;
}

.wave {
    width: 100%;
    display: block;
}

.row_castom {
    margin: 0 -15px;
    display: flex;
}

.row {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.card {
    padding: 0 15px;
}

.card:hover {
    color: var(--color-brand);
}

.card_main {
    padding: 20px 35px;
    background-color: #FFFFFF;
}

.card :nth-child(1) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card_main :nth-child(1) {
    font-size: 20px;
    color: var(--color-brand);
    font-weight: 900;
    margin-bottom: 20px;

}

.card_main :nth-child(2) {
    font-size: 18px;
    margin-bottom: 30px;
    line-height: 30px;
    font-weight: 600;
}

.card_main :nth-child(3) {
    font-size: 14px;
    color: var(--color-text-sm);
    margin-right: 20px;
}

.card_main :nth-child(4) {
    font-size: 14px;
    color: var(--color-text-sm);
}

.icon_dot {
    margin: 20px 7px;
    text-align: center;
    color: #D8D8D8;
    font-size: 10px;
}

.bottom_text {
    margin-top: 50px;
    text-align: center;
    font-size: 18px;
    color: var(--color-text);
}

.bottom_text a {
    color: black;
    font-weight: 600;
    border-bottom: 1px solid var(--color-text);
}

h3 {
    font-size: 12px;
    color: var(--color-text);
    font-weight: 600;
    letter-spacing: 3px;
    text-align: center;
}

h1 {
    text-align: center;
    color: black;
    font-size: 35px;
    margin: 33px 0;
    line-height: 40px;
}

h1 span {
    color: var(--color-brand);
    font-weight: 300;
}
</style>