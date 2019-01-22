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
            path: '/',
            load: () => import(/* webpackChunkName: 'home' */ './home'),
        },
    ],
};

export default routes;
