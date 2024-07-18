import JWT from "jsonwebtoken"

const secretKey = "Vikash@123####"

export function generateTokenForUser(user) {
    const payload = {
        _id: user._id,
        fullname: user.fullname,
        email: user.email,
        role: user.role
    }

    const token = JWT.sign(payload, secretKey)
    return token
}

export function validation(token) {
    const payload = JWT.verify(token, secretKey)
    return payload;
}

