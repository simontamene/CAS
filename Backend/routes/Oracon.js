// var express = require('express');
// var orcldb = require('oracledb');

// var router = express.Router();
// router.get('/',function(req, res,next){
//     async function belay(){
//         const conn = orcldb.getConnection({
//             user:'SIMON',
//             password:'SIMON',
//             connectString:'localhost/orcl'});

//             const result = await conn.execute('SELECT * FROM simon.customers');
//             return result;
//     }

//     belay().then(daa=>{
//         res.send(daa);
//     })
// });
var express = require('express');
var oracledb=require('oracledb');
var router = express.Router();

router.get('/',function(req,res){
    async function simon(){
        let conn = await oracledb.getConnection({user:'SIMON',password:'SIMON',connectString:'localhost/orcl'})
        const result = await conn.execute('SELECT * FROM SIMON.SALARY',[],{
        outFormat:oracledb.OUT_FORMAT_OBJECT});
        return result.rows;
    }
    simon().then(data=>{
        res.send(data);
    })

});

module.exports = router;