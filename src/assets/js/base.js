export default function(Vue) {
    Vue.prototype.jump = function (path) {
        this.$router.push({path})
    }
}