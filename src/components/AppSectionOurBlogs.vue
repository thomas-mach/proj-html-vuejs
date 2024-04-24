<template>
    <section class="container">
        <div class="container-sm">
            <h3>READ FOR MORE JOYMENT</h3>
            <h1>Latest From <span>Our Blogs</span></h1>
            <div class="row_castom">
                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/artist-blog-03-480x325.jpeg" alt="">
                        <div class="card_main">
                            <div>ARTIST</div>
                            <div>Brush Strokes Energize Trees in <br>Paintings</div>
                            <span>May 15, 2020</span>
                            <span>688 views</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/artist-blog-02-480x325.jpg" alt="">
                        <div class="card_main">
                            <div>ARTIST</div>
                            <div>Pocket-Sized Notebooks Hold<br>Miniature Paintings</div>
                            <span>May 15, 2020</span>
                            <span>603 views</span>
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="card">
                        <img src="../assets/img/artist-blog-01-480x325.jpg" alt="">
                        <div class="card_main">
                            <div>ARTIST</div>
                            <div>Connection Between Self-<br>Portraits and Identity</div>
                            <span>May 15, 2020</span>
                            <span>397 views</span>
                        </div>
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
.container {
    background-color: var(--color-background);
}

.container-sm {
    padding: 110px 0;
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

.card_main {
    padding-top: 25px;
}

.card :nth-child(1) {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
}

.card_main :nth-child(1) {
    font-size: 18px;
    color: var(--color-text);

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