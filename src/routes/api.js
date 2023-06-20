const Router = require('express');
const router = Router();

const EmployeeController = require('../controllers/employeecontroller')
const AuthController = require('../controllers/authcontroller')
const { verifyToken } = require('../middleware/authjwt');

/*
Example for auth:
router.post('/employees', [verifyToken], EmployeeController.store)
*/

router.get('/employees', EmployeeController.index)
router.post('/employees', EmployeeController.store)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)

module.exports = router
