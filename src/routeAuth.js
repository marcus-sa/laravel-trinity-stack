export const isAuthenticated = {
    redirect: '/',
    selector: (store) => !!store.user
}

export const isNotAuthenticated = {
    redirect: '/home',
    selector: (store) => !store.user
}