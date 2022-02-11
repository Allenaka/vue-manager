export default {
    state: {
        isCollapse: false,
        currentPath: ''
    },
    mutations: {
        toggleCollapse(state) {
            state.isCollapse = !state.isCollapse;
        },
        setCurrentPath(state, res) {
            state.currentPath = res;
        }
    }
}