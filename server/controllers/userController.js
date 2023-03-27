const ApiError = require('../error/ApiError')
const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')
const {User,  Basket} = require('../models/models')

const generateJwt = (id, email, role) => {
    return jsonwebtoken.sign(
        {id, email, role}, 
        process.env.SECRET_KEY,
        {expiresIn: '24h'}
    )
}

class UserController {
    async registration(req, res, next) {
        const {email, password, role} = req.body
        if(!email || !password) {
            return next(ApiError.badRequest('Некорректный email или пароль!'))
        }
        const condidate = await User.findOne({where: {email}})
        if(condidate) {
            return next(ApiError.badRequest('На данный email уже зарегестрирован пользователь!'))
        }
        const hashPassword = await bcrypt.hash(password, 3)
        const user = await User.create({email, role, password: hashPassword})
        const token = generateJwt(user.id, user.email, user.role)
        return res.json({token})
    }
    
    async login(req, res, next) {
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if(!user) {
            return next(ApiError.internal('Пользователь не найден!'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword) {
            return next(ApiError.internal('Указан неверный пароль!'))
        }
        const token = generateJwt(user.id, user.password, user.role)
        return res.json({token})
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.id, req.user.email, req.user.role)
        return res.json({token})
    }
}

module.exports = new UserController()