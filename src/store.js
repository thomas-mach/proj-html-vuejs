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
    footerComponents: [
        {
            title: 'Explore',
            items: [
                { item: 'Start here' },
                { item: 'Blog' },
                { item: 'About us' },
                { item: 'Success story' },
                { item: 'Courses' },
                { item: 'Contact us' },
            ]
        },
        {
            title: 'Information',
            items: [
                { item: 'Membership' },
                { item: 'Purchase guide' },
                { item: 'Privacy Policy' },
                { item: 'Teams of service' },
            ]
        }
    ]


})

console.log(store)
