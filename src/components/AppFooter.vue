<template>
    <footer>
        <div class="container-sm">
            <div class="row flex">
                <div class="col-6">
                    <h3>Adress</h3>
                    <p class="font">382 NE 191st St # 87394 Maiami, FL 33179-3899 <br> +1(305)547-9909 (9am - 5pm EST,
                        Monday
                        -Friday) <br> support@maxcoach.com
                    </p>
                    <div class="icons">
                        <font-awesome-icon :icon="['fab', 'facebook']" />
                        <font-awesome-icon :icon="['fab', 'twitter']" />
                        <font-awesome-icon :icon="['fab', 'instagram']" />
                        <font-awesome-icon :icon="['fab', 'invision']" />
                    </div>
                </div>
                <div class="col-6 row flex ">
                    <div v-for="(component, i) in storeItem" key="i">
                        <h3>{{ component.title }}</h3>

                        <ul class="item">
                            <li class="font" v-for="(item, j) in component.items" key="j">
                                {{ item.item }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="font copyright"><font-awesome-icon :icon="['far', 'copyright']" />2020 Maxcoach. All
                RightsReserved</div>
            <div class="return_icon"><font-awesome-icon :icon="['fas', 'arrow-up']" /></div>
        </div>
    </footer>


</template>

<script>

export default {
    props: {
        storeItem: {
            type: Object,
            required: true
        }
    },
}
</script>

<style lang="scss" scoped>
footer {
    background-color: #171521;
    position: relative;
}

.row {
    display: flex;
}

.flex {
    display: flex;
    gap: 50px;
    justify-content: center;
}

.icons {
    margin: 20px 0;
    display: flex;
    gap: 20px;
    color: var(--color-text-sm);
    cursor: pointer;
}

.icons :hover,
.item :hover {
    color: var(--color-brand);
}

.item {
    cursor: pointer;
}



h3 {
    color: white;
    font-size: 16px;
    margin-bottom: 24px;
    padding-top: 70px;
}

.copyright {
    margin-top: 100px;
    padding-bottom: 50px;
    text-align: center;
}

.font {
    font-size: 12px;
    line-height: 24px;
    color: var(--color-text-sm);
}

.return_icon {
    height: 50px;
    width: 50px;
    background-color: var(--color-brand);
    border-radius: 50%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 50px;
    right: 50px;
    cursor: pointer;
}
</style>