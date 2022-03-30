export default {
    state: {
        token: ''
    },
    mutations: {
        getToken(state) {
            state.token = state.token || localStorage.getItem('token')
        },
        setToken(state, val) {
            state.token = val;
            localStorage.setItem('token', val)
        }
    }
}