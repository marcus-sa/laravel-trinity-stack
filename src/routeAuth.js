export const isNotAuthenticated = {
    redirect: '/dashboard',
    selector: (store) => !store.session.user
}

export const isAuthenticated = {
    redirect: '/',
    selector: (store) => !!store.session.user
}