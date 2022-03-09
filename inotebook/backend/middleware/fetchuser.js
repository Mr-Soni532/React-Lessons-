const jwt = require("jsonwebtoken");
const JWT_SECRET = "bhup&nder$oniS@DevlOper|"; // signature token

const fetchuser = (req, res, next) => {
    
    //Get the user form the jwt and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Invalid Token " })
    }
    try {
        const data = jwt.verify(token, JWT_SECRET)
        req.user = data.user;
    } catch (error) {
        res.status(401).send({ error: "Invalid Token " })
    }

    next();
}

module.exports = fetchuser;
