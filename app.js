const express = require('express');
const bodyParser  = require('body-parser');
const morgan      = require('morgan');
const os = require('os')
const config = require('./config/index');
const db = require('./model/db')
let app = express();

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

app.get('/', async (req, res) =>  {
	await db.single('INSERT INTO users SET  ?', {name: 'asd', email: '112238546@qq.com', password: 'sad2122121'}).then(res => {
		console.log(res)
	})
    let data = await db.row('select * from users')

    res.json(data)
})

const server = app.listen(config.server.port, () => {
    let host = server.address().address
    let port = server.address().port
    // 获取主机名 os.hostname()
    // 获取IPv4 os.networkInterfaces().WLAN[1].address}
    console.log(`Running on http://localhost:${config.server.port}`)
});