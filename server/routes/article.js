var express = require('express');
var DatabaseOperation = require('../db.js')
var router = express.Router();

/* GET users listing. */
router.get('/list', function (req, res, next) {
    DatabaseOperation.selectall('article_LIST', function(result) {
        console.log('查询结果:', result);
        res.send(result);
    })    
});
router.post('/newArticle', function (req, res, next) {
    let data = req.body;
    data.author = '王小虎';
    DatabaseOperation.insert('article_LIST', [data], function(result) {
        console.log('inserts插入结果');
        console.log(result);
        res.send()
    })
})
router.delete('/deleteArticle', function(req, res, next) {
    let id = req.body.id
    console.log(111, id)
    DatabaseOperation.removeall('article_LIST', {
        _id: id
    }, function(result) {
        console.log('删除结果:', result.msg);
        res.send(result.result)
    })
})


module.exports = router;