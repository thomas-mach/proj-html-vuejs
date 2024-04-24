<template>
    <section>
        <div class="container-sm">
            <div class="row">
                <div>
                    <div class="card">
                        <div class="foto_box">
                            <img src="../assets/img/stock-full-hd-11-670x450.jpg" alt="">
                            <img src="../assets/img/icon-youtube-play.png" alt="">
                            <img src="../assets/img/maxcoach-shape-05.png" alt="">
                            <img src="../assets/img/maxcoach-shape-07.png" alt="">
                            <img src="../assets/img/svg-0.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <div>HOW WE WORK</div>
                        <h1>Upgrade You <br> Skills <span class="title_weight">Upgrade <br> Your Life</span></h1>
                        <p>Opening up more opportunities in front of you to get the ticket to more enjoyable door
                            in life. Getting equipped with new skills for new sets of insights into your
                            career.
                            MaxCoach accompany learners in every stage of learning.
                        </p>
                        <a href="#">Download free guidebook <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
                    </div>
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
    margin-bottom: 165px;
}

.row {
    display: flex;
}

.foto_box {
    position: relative;
}

.foto_box :nth-child(1) {
    position: relative;
    z-index: 2;
    border-radius: 5px;
}

.foto_box :nth-child(2) {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10;
}

.foto_box :nth-child(3) {
    position: absolute;
    top: 120px;
    left: -20px;
    transform: translate(-50%, -50%);
    z-index: 1;
}

.foto_box :nth-child(4) {
    position: absolute;
    right: -10px;
    top: 380px;
}

.foto_box :nth-child(5) {
    position: absolute;
    left: 0px;
    top: 0px;
    transform: translate(-50%, -50%);
}

.card {
    font-size: 12px;
    color: var(--color-text);
}

.col-4 {
    padding-left: 100px;
    padding-top: 45px;
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
    color: black;
    font-weight: 600;
    border-bottom: 1px solid var(--color-text);
}

div span {
    font-weight: 600;
}
</style>