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
        bgColor: '#0a97bb',
        to: '/article'
      }, {
          id: 1,
          label: '评论数量',
          count: 0,
          bgColor: '#1e9543',
          to: '/comment'
      }, {
          id: 2,
          label: '分类数量',
          count: 0,
          bgColor: '#ffbc00',
          to: '/category'
      }, {
          id: 3,
          label: '标签数量',
          count: 0,
          bgColor: '#ea4643',
          to: '/tag'
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
router.get('/statistic', (req, res) => {
  let data = {
    code: 200,
    message: 'success',
    data: [
      {
          id: 0,
          label: '文章数量',
          history: {
            '03-11': 0,
            '03-12': 1,
            '03-13': 0,
            '03-14': 4,
            '03-15': 5,
            '03-16': 3,
            '03-17': 7,
            '03-18': 7,
            '03-19': 8,
            '03-20': 5,
            '03-21': 6,
            '03-22': 3,
            '03-23': 2,
            '03-24': 2,
          }
      }, {
          id: 1,
          label: '评论数量',
          history: {
            '03-11': 0,
            '03-12': 1,
            '03-13': 0,
            '03-14': 4,
            '03-15': 5,
            '03-16': 3,
            '03-17': 7,
            '03-18': 7,
            '03-19': 8,
            '03-20': 5,
            '03-21': 6,
            '03-22': 3,
            '03-23': 2,
            '03-24': 2,
          }
      }, {
          id: 2,
          label: '分类数量',
          history: {
            '03-11': 0,
            '03-12': 1,
            '03-13': 0,
            '03-14': 4,
            '03-15': 5,
            '03-16': 3,
            '03-17': 7,
            '03-18': 7,
            '03-19': 8,
            '03-20': 5,
            '03-21': 6,
            '03-22': 3,
            '03-23': 2,
            '03-24': 2,
          }
      }, {
          id: 3,
          label: '标签数量',
          history: {
            '03-11': 0,
            '03-12': 1,
            '03-13': 0,
            '03-14': 4,
            '03-15': 5,
            '03-16': 3,
            '03-17': 7,
            '03-18': 7,
            '03-19': 8,
            '03-20': 5,
            '03-21': 6,
            '03-22': 3,
            '03-23': 2,
            '03-24': 2,
          }
      }
    ]
  }
  res.json(data)
})
module.exports = router;
