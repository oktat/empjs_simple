const Router = require('express');
const router = Router();

const EmployeeController = require('../controllers/employeecontroller')

router.get('/employees', EmployeeController.index)
router.post('/employees', EmployeeController.store)
router.put('/employees/:id', EmployeeController.update)
router.delete('/employees/:id', EmployeeController.destroy)

module.exports = router
