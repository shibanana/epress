var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    var obj;
    fs.readFile('./db/home.json', 'utf8', function(err, data) {
        if (err) throw err;
        obj = JSON.parse(data);
        res.render('home', {
            data: obj.title,
            data: obj.desc,
            data: obj.img,
        });
    });
});

module.exports = router;