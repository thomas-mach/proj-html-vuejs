<template>
  <div>
    <AppHeader :storeItem="store.menuItems" />
    <AppMain />
    <AppFooter :storeItem="store.footerComponents" />
  </div>

</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import { store } from './store';
export default {
  data() {
    return {
      store: store
    }
  },
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
}
</script>

<style lang="scss">
@use './style/generals.scss'
</style>