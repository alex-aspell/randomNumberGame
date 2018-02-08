const express = require ('express');
const router = express.Router();
const randomModule = require('../modules/randomModule');

router.post('/', function(request, response){
  let max = request.body.max
  console.log(max);

  randomModule.makeNumber(max);
  response.sendStatus(200):
});

module.exports = router;
