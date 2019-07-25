// 모듈화
// npm i --save mysql 을 반드시 수행할 것!
var mysql = require('mysql');
exports.selectLogin = (uid, upw, cb)=>{

    // 개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    // 상용 디비
    //    var connection = mysql.createConnection({
    //     host: 'node-db.cuoebzeyt2iw.ap-northeast-2.rds.amazonaws.com',
    //     user: 'root',
    //     password: 'mysqlmysql',
    //     database: 'nodedb'
    // });
    connection.connect((err) => {
        if (err) {
            console.log('접속오류', err)
        }
        else {
            let sql = `SELECT * FROM users WHERE uid = ? AND upw = ?;`
            connection.query(sql, [uid,upw],(err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });
}

// 불매 상품 목록 이름순으로 전부 다 가져오기 함수
exports.selectNoSellData = (cb)=>{

    // 개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    
    connection.connect((err) => {
        if (err) {
            // console.log('디비접속오류', err)
            cb(err, [])
        }
        else {
            let sql = `SELECT * FROM nosell ORDER BY name ASC;`
            connection.query(sql, (err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });

}

// selectItemsByKeyword 검색어를 포함한 데이터를 획득하는 쿼리 수행 후 결과를 돌려주는 함수
// cb : 콜백함수 -> js상 비동기 프로그램에서 결과를 돌려줄 때 함수를 인자로 받는다 
// keyword : 검색어
exports.selectItemsByKeyword = (keyword, cb)=>{

    // 개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    
    connection.connect((err) => {
        if (err) {
            console.log(err)
           cb(err, [])
        }
        else {
            // ? => '값'
            // sql 완성에 반드시 파라미터를 전달해서 완성할 필요 ㅇ벗다.
            // 문자열을 완성성시키는것만으로도 동일한 결과를 낸다
            let sql = `SELECT * FROM nosell
            WHERE NAME LIKE '%${keyword}%' or chgName LIKE '%${keyword}%' or HASH LIKE '%${keyword}%' ORDER BY NAME ASC;`
            connection.query(sql, (err, rows) => {
                console.log(err)
                cb(err, rows)
                connection.end();
            })
        }
    });
}

exports.selectItemByNo = (no, cb)=>{

    // 개발 디비
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'nodedb'
    });
    
    connection.connect((err) => {
        if (err) {
            console.log(err)
           cb(err, [])
        }
        else {
            let sql = `SELECT * FROM nosell
            WHERE NO=?;`
            connection.query(sql, [no], (err, rows) => {
                cb(err, rows)
                connection.end();
            })
        }
    });
}