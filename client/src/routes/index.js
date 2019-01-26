const routes = {
    path: '/',
    async action({ next }) {
        const route = await next();
        route.title = `${route.title || 'Untitled Page'}`;
        route.description = route.description || '';
        return route;
    },
    children: [
        {
            path: '/add',
            load: () => import(/* webpackChunkName: 'add' */ './add'),
        },
        {
            path: '/',
            load: () => import(/* webpackChunkName: 'home' */ './home'),
        },
        {
            path: '/:id',
            load: () => import(/* webpackChunkName: 'home' */ './detail'),
        },
    ],
};

export default routes;
