var mongoClient = require('mongodb').MongoClient;
var DB_CONN_STR = 'mongodb://localhost:27017/runoob'; //连接MongoDB数据库字符串


/**
 * 数据库中插入数据
 * @param {*内容} data
 * 形式var data = {"name": "菜鸟教程","url": "www.runoob.com"} 
 * @param {*集合名称} collec 
 */
function insertData(data, collec) {
    mongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log('连接成功');
        var collection = db.collection(collec);
        collection.insert(data, function (err, result) {
            if (err) {
                console.log('error:' + err);
                return;
            } else console.log(result);
            db.close();
        });
    });
}
exports.insertData = insertData;

/**
 * 数据库删除操作
 * @param {*删除内容} data 
 * @param {*集合名称} collec 
 */
function deleteData(data, collec) {
    mongoClient.connect(DB_CONN_STR, function (err, db) {
        console.log('连接成功');
        var collection = db.collection(collec);
        collection.remove(data, function (err, result) {
            if (err) {
                console.log('error:' + err);
                return;
            } else console.log(result);
            db.close();
        });
    });
}
exports.deleteData = deleteData;