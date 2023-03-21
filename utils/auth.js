const jwt = require("jsonwebtoken")
const secret_key = "tundoku-tower"
const auth = async(req, res, next) => {
    if(req.method === "GET"){
        return next()
    }
    // const token = await req.headers.authorization.split(" ")[1]
    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbGxvQG1vbm90ZWluLmNvbSIsImlhdCI6MTY3OTQwMzY5NywiZXhwIjoxNjc5NDg2NDk3fQ.3MUNEPTfrcS8QND_syxptIqKIe21MT5PsNvp18n1Q88"
    if(!token){
        return res.status(400).json({message: "トークンがありません"})
    }
    try{
        const decoded = jwt.verify(token, secret_key)
        req.body.email = decoded.email
        return next()
    }catch(err){
        return res.status(400).json({message: "トークンが正しくないので、ログインしてください"})
    }
}

module.exports = auth