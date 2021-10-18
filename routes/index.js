var express = require('express');
var router = express.Router();
var { coinMarkApi, etherScanApi } = require('../api/apiService.js');

/* GET home page. */
router.get('/task2', async function (req, res, next) {
    let apiData = await coinMarkApi();
    res.render('index', {
        title: 'Welcome to Crypto Market',
        data: JSON.stringify(apiData.data)
    });
});

router.get('/task1', async function (req, res, next) {
    res.render('index1');
});

router.get('/task1-api', async function (req, res, next) {
    let apiData = await coinMarkApi();
    res.json(JSON.stringify(apiData.data));
});

router.get('/task2-api', async function (req, res, next) {
    let apiData = await etherScanApi();
    res.json(JSON.stringify(apiData));
});

module.exports = router;
