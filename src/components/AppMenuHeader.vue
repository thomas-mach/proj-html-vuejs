<template>
    <div>
        <div @mouseover="showElement = true" @mouseleave="showElement = false" class="menu">{{
            item.text
        }}<font-awesome-icon class="icon" :icon="['fas', 'chevron-down']" /></div>
        <div class="dropdownBox" v-if="showElement">
            <div class="dropdownEl" v-for="(el, i) in item.dropdown" :key="i">{{ el.text }}</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showElement: false,
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    methods: {

    }
}
</script>


<style lang="scss" scoped>
.menu {
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    border-bottom: 1px solid white;
}

.menu:hover {
    color: #20AD96;
    border-bottom: 1px solid#20AD96;

}

.dropdownEl {
    font-size: 14px;
}

.dropdownBox {
    position: absolute;
    top: 80px;
    padding: 14px;
    background-color: white;
    display: flex;
    flex-direction: column;
    border-bottom: 3px solid #20AD96;
    gap: 5px;
    z-index: 1;
}

.icon {
    font-size: 10px;
}
</style>