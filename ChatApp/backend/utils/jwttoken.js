import jwt from "jsonwebtoken"
const secretKey = "vikash@123##"
const generateTokenAndCookie = (userId, res) => {
    const token = jwt.sign({userId}, secretKey, {
        expiresIn: "15d"
    })


    res.cookie("JWT", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
    })
}

export default generateTokenAndCookie;