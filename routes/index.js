var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.param("bingo")){
    res.render('index', { title: 'Sut', circusCalc: 85 * parseFloat(req.param("bingo"))});
  }else{
    res.render('index', { title: 'Sut', circusCalc: "No number given"});
  }
});

router.post('/', function(req, res, next) {
  console.log("Bingo:" + req.body.bingo);
  if(req.body.bingo){
    res.render('index', { title: 'Sut', circusCalc: 85 * parseFloat(req.body.bingo)});
  }else{
    res.render('index', { title: 'Sut', circusCalc: "No number given"});
  }
});

module.exports = router;
