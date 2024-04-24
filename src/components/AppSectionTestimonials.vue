<template>
    <section>
        <div class="container-sm">
            <div class="row">
                <div class="col-6 flex">
                    <div class="card">
                        <div>TESTIMONIALS</div>
                        <h1>Why Do People <br> <span class="title_weight">*Hearts*</span> Us?</h1>
                        <p>Seeking for verbals of our service quality? Find them here. <br> Everything is trasparent and
                            straightforward for your sense <br> of justification.</p>
                        <a href="#">Viev all <font-awesome-icon :icon="['fas', 'arrow-right']" /></a>
                    </div>
                </div>

                <div class="col-6">
                    <div class="card">
                        <div class="box">
                            <p>Profesional team of specialist and passionate mentors at reach</p>
                            <p class="bottom_text">I need to get a certification for English proficency and MaxCoach is
                                my best chois. Thier
                                tutors are smart and professional when dealing with students.</p>
                            <div class="avatar_box">
                                <img class="avatar_foto" src="../assets/img/testimonial-avata-01.jpg" alt="">
                                <div>
                                    <p>MANDLEY PORDON</p>
                                    <p class="bottom_text">/IT Specialist</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-6">
                    <div class="card_team">
                        <img src="../assets/img/home-3-team-image.png" alt="">
                        <img src="../assets/img/svg-3.svg" alt="">
                        <img src="../assets/img/maxcoach-shape-05.png" alt="">
                        <img src="../assets/img/maxcoach-shape-07.png" alt="">
                        <img src="../assets/img/maxcoach-shape-01.png" alt="">
                    </div>
                </div>
                <div class="col-6 flex">
                    <div class="card">
                        <div>EVERYTHING IN <span>MAXCOACH</span></div>
                        <h1>We're Here To<br> <span class="title_weight">Transform</span> You!</h1>
                        <p>As learners, people can enjoy great companionship from <br> MaxCoach mentors and educators.
                            We can help you <br>develop and grow at your best.</p>
                        <button class="button">Get free guide</button>
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
.row {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 150px;
}

.flex {
    display: flex;
    justify-content: center;
}

.card {
    font-size: 14px;
    color: var(--color-text);
}

.card_team {
    position: relative;
}

.card_team :nth-child(1) {
    position: relative;
    z-index: 10000;
}

.card_team :nth-child(2) {
    position: absolute;
    top: 25px;
    left: -30px;
}

.card_team :nth-child(3) {
    position: absolute;
    top: 109px;
    left: -111px;
}


.card_team :nth-child(4) {
    position: absolute;
    bottom: -107px;
    right: 193px;
}

.card_team :nth-child(5) {
    position: absolute;
    bottom: 30px;
    left: -300px;
}

.button {
    text-align: center;
    background-color: var(--color-brand);
    color: white;
    width: 210px;
    height: 52px;
    border: none;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
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

.box {
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
    font-weight: 400;
    color: black;
    width: 670px;
    height: 357px;
    border-radius: 5px;
    background-color: white;
    font-size: 18px;
    padding: 45px;
}

.bottom_text {
    color: var(--color-text);
}

.avatar_box {
    display: flex;
    gap: 30px;
    align-items: center;
}

.avatar_foto {
    width: 100px;
    border-radius: 50%;
}

.box p {
    line-height: 30px;
}

.avatar_name {
    display: flex;

}
</style>