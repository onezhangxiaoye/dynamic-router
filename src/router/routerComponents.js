export const routerComponents = Object.create(null);
routerComponents.Page1 = () => import('../views/Page1');
routerComponents.Page2 = () => import('../views/Page2');

export function getRouterComponent(tag) {
    return routerComponents[tag]
}
