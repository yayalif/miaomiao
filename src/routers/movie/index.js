export default {
    path: '/movie',
    redirect:'/movie/nowPlaying',
    component: () => import('@/views/Movie'),
    children: [{
            path: 'city',
            component: () => import('@/components/City')
        },
        {
            path: 'nowPlaying',
            component: () => import('@/components/NowPlaying')
        },
        {
            path: 'comingSoon',
            component: () => import('@/components/Comingsoon')
        },
        {
            path: 'search',
            component: () => import('@/components/Search')
        }
    ]
}