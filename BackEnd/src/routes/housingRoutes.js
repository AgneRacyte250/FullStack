var express = require('express');
var housingController = require('../controller/housingController');
var sessionMiddleware = require('../middleware/sessionMiddleware');

var router = express.Router();

router.post('/housing', sessionMiddleware, housingController.createHousingControllerFn);
router.get('/housing', sessionMiddleware, housingController.getDataControllerFn);
router.patch('/housing/update/:id', sessionMiddleware, housingController.updateHousingController);
router.delete('/housing/delete/:id', sessionMiddleware, housingController.deleteHousingController);

module.exports = router;
