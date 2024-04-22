<template>
    <section class="container">
        <img src="../assets/img/home-3-hero-bg.jpg" alt="hero-foto">
        <div class="sideNav">
            <font-awesome-icon :icon="['fas', 'ruler-combined']" />
            <font-awesome-icon :icon="['fas', 'life-ring']" />
            <font-awesome-icon :icon="['fas', 'book']" />
            <font-awesome-icon :icon="['fas', 'cart-shopping']" />
        </div>
        <div class="row">
            <h3>Commence Business</h3>
            <h1>Distant Mentoring Program</h1>
            <button class="button">Download free guidebook
                <font-awesome-icon :icon="['fas', 'arrow-right']" />
            </button>
        </div>
    </section>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1920px;
    position: relative;
    margin-bottom: 180px;
}

.row {
    color: white;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
}

h1 {
    font-size: 50px;
    margin-bottom: 30px;
}

h3 {
    font-size: 26px;
}

.button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    color: #20AD96;
    width: 278px;
    height: 52px;
    border: none;
    border-radius: 7px;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
}

.button:hover {
    color: white;
    background-color: #20AD96;
}

.sideNav {
    position: absolute;
    top: 120px;
    right: 0;
    padding: 12px;
    background-color: white;
    color: black;
    display: flex;
    flex-direction: column;
    gap: 24px;
    border-top-left-radius: 7px;
    border-bottom-left-radius: 7px;
    cursor: pointer;
}
</style>