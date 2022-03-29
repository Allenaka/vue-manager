var express = require('express');
var DatabaseOperation = require('../db.js')
var router = express.Router();
const jwt = require('jsonwebtoken');
const TOKEN = 'zaozijintianbuchizao'

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/login', (req,res) => {
  // 查询数据库
  let username = req.body.username
  let password = req.body.password
  DatabaseOperation.select('user', {
    'username': username
  }, function(result) {
    console.log(result)
    if (result.status === 1) {
      console.log(666, result.result[0].password)
      if (result.result[0].password === password) {
        jwt.sign({_id: result.result[0]._id, username: result.result[0].username}, TOKEN, {expiresIn: 250000} ,(err, token) => {
          if (err) {
            res.json({errno: 3, msg: '登陆失败'});
          } else {
            res.json({errno: 0, token, info: {_id: result.result[0]._id, username: result.result[0].username, msg: '登陆成功'}})
          }
        })
      }
      else res.json({errno: 2, msg: '密码错误'})
    } else if (result.status === 2) {
      res.json({errno: 1, msg: '用户名还未注册'})
    }  
    console.log("select查询结果");
  });
  // db.collection('user')
  //     .findOne(req.body)
  //     .then(
  //         ({_id, username, sex}) => {
  //             // 创建token
  //             jwt.sign({_id, username, sex}, TOKEN, {expiresIn: 250000} ,(err, data) => {
  //                 if (err) {
  //                     res.json({errno: 2, msg: '登陆失败'});
  //                 } else {
  //                     res.json({errno: 0, data })
  //                 }
  //             })
  //         },
  //         err => res.json({errno: 1, msg: '用户名或密码错误'})
  //     )
})

module.exports = router;
