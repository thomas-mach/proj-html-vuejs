<template>
    <section>
        <div class="container-sm">
            <img class="item-1" src="../assets/img/maxcoach-shape-02.png" alt="">
            <img class="item-2" src="../assets/img/maxcoach-shape-09.png" alt="">
            <div class="row">
                <h1>Subscribe <span>NewsLetters</span></h1>
                <p class="bottom_text">Enter your email address to register to our newsletter subscription <br>
                    delivered on a regular
                    basis!</p>
                <div>
                    <input class="emial" type="text" placeholder="Enter your email">
                    <button class="button">Subscribe</button>
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
    padding: 75px 0 100px;
    position: relative;
}

.item-1 {
    position: absolute;
    top: 200px;
    right: 0;
}

.item-2 {
    position: absolute;
    top: 80px;
    right: 0;
}



.row {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.emial {
    width: 445px;
    height: 52px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    border: none;
    padding-left: 12px;
    font-size: 18px;
    background-color: #F5F5F5;
}

.button {
    text-align: center;
    background-color: var(--color-brand);
    color: white;
    width: 125px;
    height: 52px;
    border: none;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    cursor: pointer;
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

.bottom_text {
    margin-bottom: 50px;
    text-align: center;
    font-size: 18px;
    color: var(--color-text);
}
</style>