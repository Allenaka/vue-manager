
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');
var dataconfig = require('./data.config');
var DatabaseOperation = {
    /*
    @selectall 方法返回全部所有数据
    @dataname 数据库名称
    @dealdata 回调处理函数 格式function(result){};
    */
    selectall: function(dataname, dealdata) {
        const client = new MongoClient(dataconfig.dataurl);
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("数据库连接成功");
            const db = client.db(dataconfig.dataname);
            db.collection(dataname).find({}).toArray(function(err, result) { // 返回集合中所有数据
                if (err) throw err;
                dealdata(result);
            });
            client.close();
        })
    },
    /*
    @selectone 查询符合条件的数据
    @dataname 数据库名称
    @selectlanguage 查询控制语句 格式{index:value,index,value};
    @dealdata 回调处理函数 格式function(result){};
    */
    select: function(dataname, selectlanguage, dealdata) {
        const client = new MongoClient(dataconfig.dataurl);
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("数据库连接成功");
            const db = client.db(dataconfig.dataname);
            db.collection(dataname).find(selectlanguage).toArray(function(err, result) {
                console.log('find', result);
                let data = {}
                if (err) {
                    data.status = 0;
                    data.msg = '查找失败';
                    data.error = err
                } else if (result.length) {
                    data.status = 1;
                    data.msg = '查找成功';
                    data.result = result
                } else {
                    data.status = 2;
                    data.msg = '未找到数据';
                }
                dealdata(data);
                client.close();
            });
        })
    },
    /*
    @insert添加数据格式json格式
    @dataname 数据库名称
    @dealdata 回调函数处理函数有一个result参数
    */
    insert: function(dataname, insertlanguage, dealdata) {
        const client = new MongoClient(dataconfig.dataurl);
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("数据库连接成功");
            const db = client.db(dataconfig.dataname);
            db.collection(dataname).insertMany(insertlanguage, function(err, result) {
                assert.equal(err, null);
                dealdata(result);
                client.close();
            });
        })
    },
    /*
@update 修改数据的方法
@update添加数据格式json格式
@dataname 数据库名称
@dealdata 回调函数处理函数有一个result参数
*/
    update: function(dataname, updatelanguage, updatecondition, dealdata) {
        const client = new MongoClient(dataconfig.dataurl);
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("数据库连接成功");
            const db = client.db(dataconfig.dataname);
            db.collection(dataname).updateOne(updatelanguage, updatecondition, function(err, result) {
                assert.equal(err, null);
                dealdata(result);
                client.close();
            });
        })
    },
    /*
    @removeall 删除数据的方法
    @dataname 数据库名称
    @removelanguage 删除数据的条件
    @dealdata 回调函数处理函数有一个result参数
    */
    removeall: function(dataname, removelanguage, dealdata) {
        const client = new MongoClient(dataconfig.dataurl);
        client.connect(function(err) {
            assert.equal(null, err);
            console.log("数据库连接成功");
            const db = client.db(dataconfig.dataname);
            removelanguage._id && (removelanguage._id = ObjectId(removelanguage._id))
            db.collection(dataname).deleteOne(removelanguage, function(err, result) {
                assert.equal(err, null);
                let data = {}
                if (err) {
                    data.status = 0;
                    data.msg = '删除失败';
                    data.error = err
                } else if (result.result.n) {
                    data.status = 1;
                    data.msg = '删除成功';
                    data.result = result
                } else {
                    data.status = 2;
                    data.msg = '未找到数据';
                }
                dealdata(data);
                client.close();
            });
        })
    },
 
};
 
// 测试用例
// 查询全部
// DatabaseOperation.selectall('address', function(result) {
//         console.log("select查询结果");
//         console.log(result);
//     })
//     // 查询单个
// DatabaseOperation.select('address', {
//     "addressid": "2"
// }, function(result) {
//     console.log("select查询结果");
//     console.log(result);
// });
// // 插入数据
// DatabaseOperation.insert('address', [{
//         "insert": "hello"
//     }], function(result) {
//         console.log('inserts插入结果');
//         console.log(result);
//     })
// // 更新
// DatabaseOperation.update('address', {
//         "insert": "hello"
//     }, {
//         $set: {
//             "insert": "https://www.runoob.com"
//         }
//     }, function(result) {
//         console.log(result);
//     })
// // 删除
// DatabaseOperation.removeall('address', {
//     "insert": "hello"
// }, function(result) {
//     console.log(result);
// })
 
module.exports = DatabaseOperation;
