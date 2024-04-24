<template>
    <section>
        <div class="container-sm">
            <div class="row">
                <div class="col-6">
                    <div class="card">
                        <div>EVERYTHING IN <span>MAXCOACH</span> </div>
                        <h1>Learn about our <br><span class="title_weight">Work Culture</span> at <br> MaxCoach</h1>
                        <p>Spend some time to visit our website or head office and <br> discover our current courses,
                            enrollment
                            procedure, and <br> registration deadline. We're opening new classes every <br> beginning of
                            each
                            month.</p>
                        <div>Have question? <a href="#">Get Free Guide <font-awesome-icon
                                    :icon="['fas', 'arrow-right']" /></a></div>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card card_item">
                        <img src="../assets/img/stock-full-hd-10-ohki1ayywq3cqutettrncduujpoaorifqu4relt2ts.jpg" alt="">
                        <img src="../assets/img/about-us-01-ohkia3qg98rq9vg3s0mn2hkflr1migdqdw370qnegc.jpg" alt="">
                        <img src="../assets/img/maxcoach-shape-02.png" alt="">
                        <img src="../assets/img/maxcoach-shape-07.png" alt="">
                        <img src="../assets/img/maxcoach-shape-08.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <div class="container-sm">
            <div class="row-flex">
                <div class="statistics_box">
                    <div>129+</div>
                    <div>ENROLLED LEARNERS</div>
                </div>
                <div class="statistics_box">
                    <div>80</div>
                    <div>FINISHED SESSIONS</div>
                </div>
                <div class="statistics_box">
                    <div>4%</div>
                    <div>SATISFACTION RATE</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container-sm {
    margin-bottom: 115px;
}

.row {
    display: flex;
}

.row-flex {
    display: flex;
    justify-content: space-between;
    padding: 0 250px;
}

.statistics_box {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.statistics_box :nth-child(1) {
    font-size: 35px;
    color: var(--color-brand);
    font-weight: 900;
    margin-bottom: 16px;
}

.statistics_box :nth-child(2) {
    font-size: 12px;
    color: var(--color-text);
    font-weight: 600;
    letter-spacing: 3px;
}

.card {
    font-size: 12px;
    color: var(--color-text);
    position: relative;
}

.card_item :nth-child(1) {
    width: 100%;
    z-index: 1;
    position: relative;
    border-radius: 5px;
    height: auto;
    flex-grow: 1;
    flex-basis: 1;
}

.card_item :nth-child(2) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -50%);
    z-index: 2;
    border-radius: 5px;
}

.card_item :nth-child(3) {
    position: absolute;
    right: 55px;
    top: 335px;
    z-index: 3;
}


.card_item :nth-child(4) {
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(0, -50%);
}

.card_item :nth-child(5) {
    position: absolute;
    left: 0;
    top: 250px;
}



h1 {
    color: black;
    font-size: 35px;
    margin: 33px 0;
    line-height: 40px;
}

.title_weight {
    color: var(--color-brand);
    font-weight: 300;
}

p {
    line-height: 20px;
    margin-bottom: 20px;
}

div a {
    color: var(--color-brand);
    border-bottom: 1px solid var(--color-text);
    font-weight: 600;
}

div span {
    font-weight: 600;
}
</style>