<template>
    <div>
        <AppSectionHero />
        <AppSectionWorkCulture />
        <AppSectionUpgradeYourLife />
        <AppSectionCourses />
        <AppSectionTestimonials />
        <AppSectionOurBlogs />
        <AppSectionNewsLetters />
    </div>
</template>

<script>
import AppSectionHero from './AppSectionHero.vue';
import AppSectionWorkCulture from './AppSectionWorkCulture.vue';
import AppSectionUpgradeYourLife from './AppSectionUpgradeYourLife.vue';
import AppSectionCourses from './AppSectionCourses.vue';
import AppSectionTestimonials from './AppSectionTestimonials.vue';
import AppSectionOurBlogs from './AppSectionOurBlogs.vue';
import AppSectionNewsLetters from './AppSectionNewsLetters.vue';
export default {
    components: {
        AppSectionHero,
        AppSectionWorkCulture,
        AppSectionUpgradeYourLife,
        AppSectionCourses,
        AppSectionTestimonials,
        AppSectionOurBlogs,
        AppSectionNewsLetters,
    }
}
</script>

<style lang="scss" scoped></style>