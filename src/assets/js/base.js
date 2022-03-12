export default function(Vue) {
    Vue.prototype.jump = function (path) {
        this.$router.push({path})
    }
    Vue.prototype.blob2Base64 = function(blob) {
        return new Promise(resolve => {
            let fr = new FileReader();
        
            fr.onload = (result) => {
                resolve(result.target.result)
            }
            
            fr.readAsDataURL(blob);
        })
    }
}