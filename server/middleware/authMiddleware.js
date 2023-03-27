const jsonwebtoken = require('jsonwebtoken')

module.exports = function (req, res, next) {
    if(req.method === "OPTIONS") {
        next()
    }

    try {
        const token = req.headers.authorization.split(' ')[1] // Bearer asdfgas
        if(!token) {
            return res.status(401).json({message: 'Не авторизован!'})
        }
        const decoded = jsonwebtoken.verify(token, process.env.SECRET_KEY)
        req.user = decoded
        next()
    } catch (e) {
        res.status(401).json({message: 'Не авторизован!'})
    }
}