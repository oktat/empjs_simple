const Employee = require('../models/employee')

const EmployeeController = {
    async index(req, res) {
        try {
            const emps = await Employee.findAll()
            res.status(200)
            res.json({
                success: true,
                data: emps
            })
        } catch (error) {
            res.status(500)
            res.send('Hiba')
        }        
    },
    async store(req, res) {
        try {
            const emp = await Employee.create(req.body)
            res.status(201)
            res.json({
                success: true,
                data: emp
            })
        } catch (error) {
            res.status(500)
            res.send('Hiba')
        }        
    },
    async update(req, res) {
        try {
            const id = req.params.id
            const emp = await Employee.update(req.body, {
                where: {id: id}
            })
            res.status(200)
            res.json({
                success: true,
                data: emp
            })
        } catch (error) {
            res.status(500)
            res.send('Hiba')
        }        
    },
    async destroy(req, res) {
        try {
            const id = req.params.id
            const emp = await Employee.destroy({
                where: {id: id}
            })
            res.status(200)
            res.json({
                success: true,
                data: emp
            })
        } catch (error) {
            res.status(500)
            res.send('Hiba')
        }        
    }
}

module.exports = EmployeeController