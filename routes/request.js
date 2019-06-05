const express = require('express');
const requestController  = require('../controllers/requestController');
const router = express.Router();
const passport = require('passport');

console.log("fdjkfbg-----------------")

router.post('/',passport.authenticate('jwt', { session: false }),requestController.create);
router.put('/:id',passport.authenticate('jwt', { session: false }),requestController.update);
router.delete('/:id',passport.authenticate('jwt', { session: false }),requestController.delete);
router.get('/pending',passport.authenticate('jwt', { session: false }),requestController.pending);
router.get('/approved',passport.authenticate('jwt', { session: false }),requestController.approved);
router.get('/:departmentId/forApproval',passport.authenticate('jwt', { session: false }),requestController.forApproval);



module.exports = router;