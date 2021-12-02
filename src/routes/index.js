var express = require('express');
var router = express.Router();
const {form, welcome, thanks, index, deletePreferences} = require('../controllers/mainControllers');
const formValidator = require('../validations/formValidator');

/* GET home page. */
router.get('/', index)
router.get('/form',form)
router.post('/form',formValidator, welcome);
router.get('/thanks', thanks)
router.get('/borrarPreferencia', deletePreferences);

module.exports = router;
