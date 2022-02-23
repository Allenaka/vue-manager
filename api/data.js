import http from './axios.js'
export const articleListData = () => {
    return http.get("/article/list")
}
export const newArticle = postData => {
    return http.post('/article/newArticle', postData)
}
export const navMenuData = () => {
    return http.get('/navMenu')
}
export const statisticData = () => {
    return http.get('/info')
}
export const deleteArticle = postData => {
    return http.delete('/article/deleteArticle', postData)
}