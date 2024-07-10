import jwt from "jsonwebtoken"
const generateTokenAndCookie = (userId, fullname, gmail, res) => {
    const token = jwt.sign({ userId, fullname, gmail }, process.env.JWT_SECRET_KEY, {
        expiresIn: "1hr",
    })


    res.cookie("jwt", token, {
        maxAge: 1 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict"
    })
}

export default generateTokenAndCookie;