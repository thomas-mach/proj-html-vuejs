import { reactive } from 'vue'

export const store = reactive({
    menuItems: [
        {
            text: 'Home',
            dropdown: [
                { text: 'HomeLink', link: '/Home1' },
                { text: 'HomeLink', link: '/Home1' },
                { text: 'HomeLink', link: '/Home1' },
            ]
        },

        {
            text: 'Pages',
            dropdown: [
                { text: 'PagesLink', link: '/Pages' },
                { text: 'PagesLink', link: '/Pages' },
                { text: 'PagesLink', link: '/Pages' },
            ]
        },

        {
            text: 'Courses',
            dropdown: [
                { text: 'CoursesLink', link: '/Courses' },
                { text: 'CoursesLink', link: '/Courses' },
                { text: 'CoursesLink', link: '/Courses' },
            ]
        },

        {
            text: 'Features',
            dropdown: [
                { text: 'FeaturesLink', link: '/Features' },
                { text: 'FeaturesLink', link: '/Features' },
                { text: 'FeaturesLink', link: '/Features' },
            ]
        },

        {
            text: 'Blog',
            dropdown: [
                { text: 'BlogLink', link: '/Blog' },
                { text: 'BlogLink', link: '/Blog' },
                { text: 'BlogLink', link: '/Blog' },
            ]
        },

        {
            text: 'Shop',
            dropdown: [
                { text: 'ShopLink', link: '/Shop' },
                { text: 'ShopLink', link: '/Shop' },
                { text: 'ShopLink', link: '/Shop' },
            ]
        },
    ],


})

console.log(store)
