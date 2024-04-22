<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="menu">
                    <AppMenuHeader v-for="(el, i) in store.menuItems" :key="i" :item="el" />
                </div>
                <img class="logo" src="../assets/img/dark-logo.png" alt="">
                <div class="headerLeft">
                    <div class="badgeBox">
                        <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                        <div class="badge">0</div>
                    </div>
                    <font-awesome-icon :icon="['far', 'circle-user']" />
                    <div class="searchContainer">
                        <input class="search" type="text" placeholder="Search...">
                        <font-awesome-icon class="magnifyingIcon" :icon="['fas', 'magnifying-glass']" />
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { store } from '../store';
import AppMenuHeader from './AppMenuHeader.vue';
export default {
    data() {
        return {
            store: store
        }
    },
    components: {
        AppMenuHeader,
    }
}
</script>

<style lang="scss" scoped>
.container {
    max-width: 1920px;
    margin: 0 auto;
    padding: 0 168px;
    height: 80px;
    position: relative;
}

.row {
    height: 80px;
    display: flex;
    justify-content: space-between;
    overflow: visible;
    align-items: center;
}

.menu {
    display: flex;
    gap: 20px;
}

.logo {
    width: 160px;
}

.search {
    width: 280px;
    height: 48px;
    border-radius: 3px;
    border: none;
    padding-left: 12px;
    font-size: 18px;
    background-color: #F5F5F5;
}

.magnifyingIcon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 18px;
    color: #20AD96;

}

.searchContainer {
    position: relative;
}

.headerLeft {
    display: flex;
    align-items: center;
    gap: 20px;
    font-size: 18px;
}

.badgeBox {
    position: relative;
}

.badge {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F5F5F5;
    background-color: #20AD96;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    font-size: 12px;
    position: absolute;
    top: -15px;
    left: 15px;
}
</style>