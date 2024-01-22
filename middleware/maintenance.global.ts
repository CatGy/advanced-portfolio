export default defineNuxtRouteMiddleware((to, from) => {
    const { inMaintenance } = useRuntimeConfig();
    if(to.path !== '/maintenance' && inMaintenance === 'true'){
        return navigateTo('/maintenance')
    }
})
