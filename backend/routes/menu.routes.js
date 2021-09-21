const { Router } = require('express')
const menuControllers = require('../controllers/menu.controllers');
const router = Router();
const tokenFunctions = require('../middlewares/verifyToken')


console.log(tokenFunctions)
//router.get('/laruta', el middleware, el controlador)
router.get('/showAll', tokenFunctions.verifyToken, menuControllers.showMenu)
router.get('/show/:id', tokenFunctions.verifyToken, menuControllers.showById)
router.post('/create', tokenFunctions.verifyToken, menuControllers.create)
router.delete('/delete/:id', tokenFunctions.verifyToken, menuControllers.delete)
router.post('/edit', tokenFunctions.verifyToken, menuControllers.edit)




module.exports = router