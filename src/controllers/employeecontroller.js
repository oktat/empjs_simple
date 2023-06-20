const { Sequelize } = require('sequelize')
const Employee = require('../models/employee')

const EmployeeController = {
    async index(req, res) {
        try {
            await EmployeeController.tryIndex(req, res)
        } catch (err) {
            res.status(500)
            res.json({
                access: false,
                message: 'Hiba',
                error: err.message
            })
        }        
    },
    async tryIndex(req, res) {
        const emps = await Employee.findAll()
        res.status(200)
        res.json({
            success: true,
            data: emps
        })
    },
    async store(req, res) {
        try {
            await EmployeeController.tryStore(req, res)
        } catch (error) {
            if (error instanceof Sequelize.ValidationError) {
                res.status(400)
            }else {
                res.status(500)
            }
            const errorMessage = error.errors[0].message
            res.json({
                success: true,
                message: 'Error! The update is failed!',
                error: errorMessage
            })
        }        
    },
    async tryStore(req, res) {
        const emp = await Employee.create(req.body)
        res.status(201)
        res.json({
            success: true,
            data: emp
        })
    },
    async update(req, res) {
        try {
            const id = req.params.id
            const Emp = await Employee.findOne({
                where: { id: id}
            })
            if(Emp === null) {
                throw new Error('Erorr! No such emplyoee!')
            }            
            await EmployeeController.tryUpdate(req, res)
        } catch (error) {
            var errorMessage = null
            if (error instanceof Sequelize.ValidationError) {
                res.status(400)
            }else if(error.errors){
                errorMessage = error.errors[0].message
                res.status(500)
            }else{
                res.status(500)
                errorMessage = error.message
            }
            
            res.json({
                success: true,
                message: 'Error! The update is failed!',
                error: errorMessage
            })
        }
    },
    async tryUpdate(req, res) {
        const id = req.params.id
        const emp = await Employee.update(req.body, {
            where: {id: id}
        })
        res.status(200)
        res.json({
            success: true,
            message: 'Ok. Update is success.',
            data: req.body
        })
    },
    async destroy(req, res) {
        try {
            const id = req.params.id
            const Emp = await Employee.findOne({
                where: { id: id}
            })
            if(Emp === null) {
                throw new Error('Erorr! No such emplyoee!')
            }
            await EmployeeController.tryDestroy(req, res)
        }catch (error) {
            var errorMessage = null
            if(error.errors) {
                errorMessage = error.errors[0].message
                res.status(500)
            }else {
                errorMessage = error.message
                res.status(400)
            }            
            res.json({
                success: false,
                message: 'Error! Delete is failed!',
                error: errorMessage
            })
        }        
    },
    async tryDestroy(req, res) {
        const id = req.params.id
        const item = await Employee.destroy({
            where: {id: id}
        })
        await res.status(200)
        await res.json({
            success: true,
            message: 'Ok. Delete is true',
            data: item
        })
    }
}

module.exports = EmployeeController
