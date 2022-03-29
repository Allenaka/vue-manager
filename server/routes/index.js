var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/info', (req, res) => {
  res.send({
    code: 200,
    message: 'success',
    data: [
      {
        id: 0,
        label: '文章数量',
        count: 0,
        bgColor: '#0a97bb'
      }, {
          id: 1,
          label: '评论数量',
          count: 0,
          bgColor: '#1e9543'
      }, {
          id: 2,
          label: '分类数量',
          count: 0,
          bgColor: '#ffbc00'
      }, {
          id: 3,
          label: '标签数量',
          count: 0,
          bgColor: '#ea4643'
      }
    ]
  })
})
router.get('/navMenu', (req, res) => {
  res.json({
    code: 200,
    message: 'success',
    data: [
        {
            path: '/home',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/Home'
        }, {
            path: '/article',
            name: 'article',
            label: '文章管理',
            icon: 'video-play',
            url: 'ArticleManage/ArticleManage'
        }, {
            path: '/category',
            name: 'category',
            label: '分类管理',
            icon: 'video-play',
            url: 'CategoryManage/CategoryManage'
        }, {
            path: '/tag',
            name: 'tag',
            label: '标签管理',
            icon: 'video-play',
            url: 'TagManage/TagManage'
        }, {
            path: '/user',
            name: 'user',
            label: '用户管理',
            icon: 'user',
            url: 'UserManage/UserManage'
        }, {
            label: '其他',
            icon: 'location',
            children: [
                {
                    path: '/page1',
                    name: 'page1',
                    label: '页面1',
                    icon: 'setting',
                    url: 'Other/PageOne'
                }, {
                    path: '/page2',
                    name: 'page2',
                    label: '页面2',
                    icon: 'setting',
                    url: 'Other/PageTwo'
                }
            ]
        }
    ]
  })
})
module.exports = router;
